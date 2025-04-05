import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

// __dirname setup for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// View and static setup
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const githubHeaders = {
  Accept: "application/vnd.github.v3+json",
  "User-Agent": "RepoAnalyzer/1.0",
};

const fetchGitHubData = async (url) => {
  const response = await fetch(url, { headers: githubHeaders });
  if (!response.ok) {
    throw new Error(`GitHub API Error: ${response.statusText}`);
  }
  return response.json();
};

const getRepositoryInsights = async (owner, repo) => {
  const urls = [
    `https://api.github.com/repos/${owner}/${repo}`,
    `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=5`,
    `https://api.github.com/repos/${owner}/${repo}/pulls?state=all&per_page=5`,
    `https://api.github.com/repos/${owner}/${repo}/issues?state=all&per_page=100`,
    `https://api.github.com/repos/${owner}/${repo}/languages`,
  ];

  const results = await Promise.all(urls.map(fetchGitHubData));
  const [repoData, contributors, prs, issues, languages] = results;
  return { repoData, contributors, prs, issues, languages };
};

const calculateHealthScore = (repoData) => {
  const now = new Date();
  const updatedAt = new Date(repoData.pushed_at);
  const daysSinceUpdate = Math.floor((now - updatedAt) / (1000 * 60 * 60 * 24));
  return Math.min(
    100,
    Math.floor(
      0.4 *
        (repoData.stargazers_count / (repoData.stargazers_count + 100)) *
        100 +
        0.3 * (repoData.forks_count / (repoData.forks_count + 50)) * 100 +
        0.2 *
          (repoData.open_issues_count / (repoData.open_issues_count + 50)) *
          100 +
        0.1 * Math.max(0, 100 - daysSinceUpdate * 2)
    )
  );
};

const computeIssueTrends = (issues) => {
  const trends = { openedPerMonth: {}, closedPerMonth: {} };
  issues.forEach((issue) => {
    const createdMonth = new Date(issue.created_at).toISOString().slice(0, 7);
    trends.openedPerMonth[createdMonth] =
      (trends.openedPerMonth[createdMonth] || 0) + 1;

    if (issue.state === "closed" && issue.closed_at) {
      const closedMonth = new Date(issue.closed_at).toISOString().slice(0, 7);
      trends.closedPerMonth[closedMonth] =
        (trends.closedPerMonth[closedMonth] || 0) + 1;
    }
  });
  return trends;
};

app.get("/api/analyze", async (req, res) => {
  try {
    const { url } = req.query;
    const match = url.match(/github\.com\/([^/]+)\/([^/]+)/);

    if (!match || !match[1] || !match[2]) {
      return res.status(400).json({
        error: "Invalid GitHub URL format. Use: https://github.com/owner/repo",
      });
    }

    const [, owner, repo] = match;
    const { repoData, contributors, prs, issues, languages } =
      await getRepositoryInsights(owner, repo);

    const actualIssues = issues.filter(
      (issue) => issue.pull_request === undefined
    );
    const totalIssues = actualIssues.length;
    const closedIssues = actualIssues.filter(
      (issue) => issue.state === "closed"
    ).length;

    const issueTrends = computeIssueTrends(actualIssues);

    const chartData = {
      trend_chart: `charts/${owner}_${repo}_trend.png`,
      pie_chart: `charts/${owner}_${repo}_pie.png`,
      language_chart: `charts/${owner}_${repo}_language.png`,
      issueTrends,
    };

    const healthScore = calculateHealthScore(repoData);

    res.json({
      full_name: repoData.full_name,
      stargazers_count: repoData.stargazers_count,
      forks_count: repoData.forks_count,
      open_issues_count: repoData.open_issues_count,
      healthScore,
      issueTrends,
      issues: { total: totalIssues, closed: closedIssues },
      contributors,
      prs,
      chartData,
      languages,
    });
  } catch (error) {
    console.error("Error in /api/analyze:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get(["/", "/search"], (req, res) => res.render("search"));
app.get("/report", (req, res) => res.render("report"));

app.listen(3001, () =>
  console.log("✅ Server running at http://localhost:3001")
);

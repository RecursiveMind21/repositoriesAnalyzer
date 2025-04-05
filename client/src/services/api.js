import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const analyzeRepository = async (url) => {
  const response = await API.get("/analyze", { params: { url } });
  return response.data;
};

export const getChartData = async (owner, repo, trends) => {
  const response = await API.post("/generate-charts", { owner, repo, trends });
  return response.data;
};

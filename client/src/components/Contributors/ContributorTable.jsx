export default function ContributorTable({ contributors }) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-xl font-semibold mb-4">Top Contributors</h3>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="text-left border-b border-gray-200">
                            <th className="pb-3">Contributor</th>
                            <th className="pb-3">Contributions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contributors?.length > 0 ? (
                            contributors.map((contributor, index) => (
                                <tr
                                    key={index}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="py-3">
                                        <a
                                            href={`https://github.com/${contributor.login}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple-600 hover:underline"
                                        >
                                            {contributor.login}
                                        </a>
                                    </td>
                                    <td>{contributor.contributions}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className="py-3 text-center text-gray-500">
                                    No contributor data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
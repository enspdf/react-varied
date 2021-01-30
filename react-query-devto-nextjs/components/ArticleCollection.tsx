export const ArticleCollection = ({ collection }) => {
  return (
    <div className="bg-white shadow rounded">
      <ul className="divide-y divide-gray-200">
        {collection.map((article) => (
          <li>
            <a href={article.url} className="block hover:bg-gray-100">
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="text-lg text-blue-400">{article.title}</div>
                  <div className="ml-2">
                    {article.tag_list.map((tag) => (
                      <div className="ml-1 inline-flex px-2 text-xs rounded-full bg-gray-200 text-gray-700">
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

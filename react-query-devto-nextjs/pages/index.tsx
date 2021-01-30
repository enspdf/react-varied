import Head from "next/head";
import { useQuery } from "react-query";

import { ArticleCollection } from "../components/ArticleCollection";

const toJSON = (_: Response) => _.json();
const fetcher = () => fetch("https://dev.to/api/articles").then(toJSON);

export default function Home() {
  const { data: articles, isLoading, error } = useQuery("articles", fetcher);

  if (isLoading) return "Loading...";
  if (error) return error.message;

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <ArticleCollection collection={articles} />
    </div>
  );
}

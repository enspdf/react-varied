import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import Article from "../Article/Article.component";
import ArticleService from "../shared/ArticleService";
import {
  articleByIdQuery,
  articleQuery,
  articleState,
} from "../shared/globalState";
import "./ArticleList.style.scss";

const ArticleList = () => {
  // const [articles, setArticles] = useRecoilState(articleState);
  const article = useRecoilValueLoadable(articleByIdQuery(3));

  const renderArticles = () => {
    switch (article.state) {
      case "hasValue":
        const articleData = article.contents;

        return <Article key={articleData.id} item={articleData} />;
      default:
      case "loading":
      case "hasError":
        return <div>Loading...</div>;
    }
  };

  // Fetch all articles when the component mounts for the first time
  // useEffect(() => {
  //   const fetchArticles = async () => {
  //     const result = await ArticleService.getAll();

  //     setArticles(result);
  //   };

  //   fetchArticles();
  // }, []);

  return <div className="ArticleList">{renderArticles()}</div>;
};

export default ArticleList;

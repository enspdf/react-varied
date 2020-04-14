import React, { memo } from "react";
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleMeta,
  ArticleMetaElement,
} from "../styles/ArticleStyles";
import { mapTime } from "../mappers/mapTime";

export const Article = memo(function Article({ article }) {
  return (
    <ArticleWrapper data-testid="article">
      <ArticleTitle>
        <a href={article.url}>{article.title}</a>
      </ArticleTitle>
      <ArticleMeta>
        <span data-testid="article-author">
          <ArticleMetaElement color="#000">Author:</ArticleMetaElement>{" "}
          {article.author}
        </span>
        <span data-testid="article-time">
          <ArticleMetaElement color="#000">Posted:</ArticleMetaElement>{" "}
          {mapTime(article.time)}
        </span>
      </ArticleMeta>
    </ArticleWrapper>
  );
});

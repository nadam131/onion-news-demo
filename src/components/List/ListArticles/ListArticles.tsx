import React from 'react';
import CardArticle from '@components/Card/CardArticle/CardArticle';
import { ArticleProps } from '@types';

interface ListArticlesProps {
  articles: ArticleProps[];
}

const ListArticles = ({ articles }: ListArticlesProps) => {
  return (
    <div className="space-y-8 lg:space-y-14">
      {articles.map((article: ArticleProps) => (
        <CardArticle key={article.id} {...article} />
      ))}
    </div>
  );
};

export default ListArticles;

import { ArticleProps } from '@types';

export const isArticleHosted = (article: ArticleProps) => article.hosted;
export const mapArticleToNextPaths = (article: ArticleProps) => ({
  params: { slug: article.slug },
});

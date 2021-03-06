import { getImagePlaceholder } from './image';
import { ArticleProps } from '@types';

export const formatArticle = async (article: ArticleProps) => {
  if (!article.image) return article;

  return {
    ...article,
    image: {
      ...article.image,
      blurDataURL: await getImagePlaceholder(article.image.url),
    },
  };
};

export const isArticleHosted = (article: ArticleProps) => article.hosted;
export const mapArticleToNextPaths = (article: ArticleProps) => ({
  params: { slug: article.slug },
});

export const isArticleHosted = (article: any) => article.hosted;
export const mapArticleToNextPaths = (article: any) => ({
  params: { slug: article.slug },
});

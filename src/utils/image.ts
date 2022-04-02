import { getPlaiceholder } from 'plaiceholder';

export const getImagePlaceholder = async (url: string) => {
  const { base64 } = await getPlaiceholder(url);
  return base64;
};

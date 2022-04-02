interface MetaTag {
  attributes: {
    content: string;
    property: string;
  };
  content: string;
  tag: string;
}

interface Image {
  alt: string;
  url: string;
  blurDataURL: string;
}

export interface Publisher {
  name: string;
}

export interface Category {
  name: string;
}

export interface ArticleProps {
  id: string;
  slug: string;
  title: string;
  content: string;
  publicationDate: Date;
  hosted: boolean;
  sourceUrl: string;
  categories: Category[];
  seo: MetaTag[];
  publisher: Publisher;
  image: Image;
}

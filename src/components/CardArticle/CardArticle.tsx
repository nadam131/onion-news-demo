import React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import ArticleInfo from '@components/ArticleInfo/ArticleInfo';
import { ArticleProps } from '@types';

const CardArticle = ({
  slug,
  title,
  image,
  publisher,
  publicationDate,
  hosted,
  sourceUrl,
}: ArticleProps) => {
  const href = hosted ? `/${slug}` : sourceUrl;
  const target = hosted ? `_self` : '_blank';

  return (
    <div className="flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-12">
      {image && (
        <div className="lg:w-1/3">
          <Link href={href}>
            <a target={target}>
              <div className="aspect-video relative">
                <NextImage
                  src={image.url}
                  alt={image.alt}
                  blurDataURL={image.blurDataURL}
                  layout="fill"
                  placeholder="blur"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </a>
          </Link>
        </div>
      )}
      <div className="flex-1 space-y-3">
        <Link href={href}>
          <a target={target}>
            <h3
              className={`${
                image ? 'text-2xl lg:text-4xl' : 'text-xl lg:text-3xl'
              } leading-normal lg:leading-normal font-mono`}
            >
              {title}
            </h3>
          </a>
        </Link>
        <ArticleInfo date={publicationDate} publisher={publisher} />
      </div>
    </div>
  );
};

export default CardArticle;

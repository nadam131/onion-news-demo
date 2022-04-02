import React from 'react';
import { Category, Publisher } from '@types';
import { format } from 'date-fns';

interface ArticleInfoProps {
  date: Date;
  publisher?: Publisher;
  categories?: Category[];
}

const ArticleInfo = ({ date, publisher, categories }: ArticleInfoProps) => {
  const hasCategories = !!(categories && categories.length);
  return (
    <div className="space-x-2">
      {date && (
        <span className="text-lg">{format(new Date(date), 'dd MMMM')}</span>
      )}
      {publisher && (
        <span className="text-lg text-slate-400 border-l-2 border-slate-400 pl-2 ">
          {publisher.name}
        </span>
      )}
      {hasCategories && (
        <span className="text-lg text-slate-400 border-l-2 border-slate-400 pl-2">
          {categories.map((c) => c.name).join(', ')}
        </span>
      )}
    </div>
  );
};

export default ArticleInfo;

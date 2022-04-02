import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

type ArticleInfoProps = {
  date: string;
  publisher?: any;
  categories?: any;
};

const ArticleInfo = ({ date, publisher, categories }: ArticleInfoProps) => {
  return (
    <div>
      <Time>{format(new Date(date), 'dd MMMM')}</Time>
      {publisher && <Name>{publisher.name}</Name>}
      {categories && (
        <Categories>
          {categories.length ? categories.map((c) => c.name) : 'No categories'}
        </Categories>
      )}
    </div>
  );
};

const Name = styled.span`
  text-decoration: none;
  font-size: 20px;
  border-left: 1px solid gray;
  padding-left: 10px;
  color: grey;
  margin-left: 10px;
`;
const Categories = styled(Name)``;
const Time = styled.span`
  font-size: 20px;
`;

export default ArticleInfo;

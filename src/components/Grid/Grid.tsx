import React from 'react';
import styled from 'styled-components';

interface GridProps {
  children: React.ReactNode;
  columns?: number;
  rowGap?: number;
  columnGap?: number;
}

const Grid = ({
  columns = 12,
  rowGap = 0,
  columnGap = 0,
  children,
}: GridProps) => {
  return (
    <Wrapper columns={columns} rowGap={rowGap} columnGap={columnGap}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns}, 1fr);
  grid-column-gap: ${(p) => p.columnGap}px;
  grid-row-gap: ${(p) => p.rowGap}px;
`;

export default Grid;

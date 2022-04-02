import React from 'react';
import styled from 'styled-components';

interface GridProps {
  className?: string;
  children: React.ReactNode;
  columns?: number;
  rowGap?: number;
  columnGap?: number;
  justify?: string;
}

const Grid = ({
  className,
  columns = 12,
  rowGap = 0,
  columnGap = 0,
  justify = 'normal',
  children,
}: GridProps) => {
  return (
    <Wrapper
      className={className}
      columns={columns}
      rowGap={rowGap}
      columnGap={columnGap}
      justify={justify}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns}, 1fr);
  grid-column-gap: ${(p) => p.columnGap}px;
  grid-row-gap: ${(p) => p.rowGap}px;
  justify-items: ${(p) => p.justify};
`;

export default Grid;

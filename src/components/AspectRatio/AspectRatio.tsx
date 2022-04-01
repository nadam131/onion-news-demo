import React from 'react';
import styled from 'styled-components';

interface AspectRatioProps {
  ratio: '16/9';
  children: React.ReactNode;
}

const AspectRatio = ({ ratio, children }: AspectRatioProps) => {
  return (
    <Wrapper ratio={ratio}>
      <Element>{children}</Element>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ ratio: string }>`
  width: 100%;
  position: relative;
  padding-bottom: calc(100% / (${(p) => p.ratio}));
  overflow: hidden;
`;

const Element = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default AspectRatio;

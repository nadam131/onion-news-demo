import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export default Container;

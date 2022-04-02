import React from 'react';
import styled from 'styled-components';

import Container from '@components/Container/Container';

const Footer = () => {
  return (
    <Wrapper>
      <Container>created by nadam131</Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 30px 0;
  border-top: 1px solid #333;
`;

export default Footer;

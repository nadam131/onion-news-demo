import Container from '@components/Container/Container';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo>Onion News</Logo>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  border-bottom: 3px solid black;
`;

const Logo = styled.div`
  font-family: 'VT323', monospace;
  font-size: 56px;
`;

export default Header;

import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import Container from '@components/Container/Container';
import { device } from '@constants/breakpoints';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link href="/" passHref>
          <Logo>ONION NEWS</Logo>
        </Link>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid #333;
  text-align: center;
  @media ${device.laptop} {
    text-align: left;
  }
`;

const Logo = styled.a`
  font-size: 48px;
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Header;

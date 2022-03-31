import React from 'react';
import styled from 'styled-components';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;

export default Layout;

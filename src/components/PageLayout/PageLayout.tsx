import React from 'react';
import styled from 'styled-components';

export interface PageLayoutProps {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  header,
  children,
  footer,
}) => (
  <Container>
    <>{header}</>
    <Body>{children}</Body>
    <>{footer}</>
  </Container>
);

const Container = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Body = styled.main`
  display: flex;
  flex-grow: 1;
`;

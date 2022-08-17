import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

interface IPageNode {
  node: React.ReactNode;
  isEnabled: boolean;
}

export interface PageLayoutProps {
  header: React.ReactNode;
  sider: IPageNode | null;
  children: React.ReactNode;
  footer: IPageNode | null;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  header,
  sider,
  children,
  footer,
}) => (
  <Container>
    <Header>{header}</Header>
    <Body>
      {sider?.isEnabled && <Sider>{sider.node}</Sider>}
      <Button disabled={false}>Hello</Button>
      <Content>{children}</Content>
    </Body>
    {footer?.isEnabled && <Footer>{footer.node}</Footer>}
  </Container>
);

const Container = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  flex-shrink: 0;
`;

const Body = styled.main`
  display: inline-flex;
  flex-grow: 1;
`;

const Sider = styled.aside`
  display: inline-flex;
  flex: 0 320px;
  word-break: break-all;
`;

const Content = styled.section`
  display: inline-flex;
  flex: 1;
  word-break: break-all;
`;

const Footer = styled.footer`
  flex-shrink: 0;
`;

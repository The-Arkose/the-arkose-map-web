import styled from "@emotion/styled";
import { Outlet } from "@tanstack/react-router";

import { MapSelector } from "../MapSelector";
import { Header } from "./Header";

export const Layout: React.FC = () => (
  <Container>
    <Header />
    <Content>
      <MapSelector />
      <Outlet />
    </Content>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

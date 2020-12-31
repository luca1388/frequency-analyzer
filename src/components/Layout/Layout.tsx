import styled from "styled-components";

interface LayoutProps {}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 5rem 1.5rem 0 1.5rem;
  height: 100vh;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <MainContainer>{children}</MainContainer>
);
export default Layout;

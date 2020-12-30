import styled from "styled-components";

interface LayoutProps {}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0 1.5rem;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => <MainContainer>{children}</MainContainer>;
;

export default Layout;

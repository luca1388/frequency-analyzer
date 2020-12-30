import styled from "styled-components";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 0 1.5rem;
  `;

  return <MainContainer>{children}</MainContainer>;
};

export default Layout;

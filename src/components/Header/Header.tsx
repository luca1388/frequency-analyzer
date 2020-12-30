import styled from "styled-components";

const TopBar = styled.header`
  padding: 1rem 1.5rem;
  box-shadow: 2px 2px 5px 1px #888;
  width: 100%;
`;
const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Link = styled.a`
  text-decoration: none;
  &:hover {
    color: rgba(102, 102, 102, 0.6);
  }
  &:visited {
    color: #666;
  }
`;

const Header: React.FC = () => (
  <TopBar>
    <InnerHeader>
      <Link href="/">
        <h1>Frequency Analyzer</h1>
      </Link>
    </InnerHeader>
  </TopBar>
);

export default Header;

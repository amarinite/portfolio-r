import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 5rem;
  position: sticky;
  top: 0;
  background-color: #e8ebd9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
`;

const MyName = styled.p`
  font-weight: 600;
  font-size: 2rem;
`;

const NavUl = styled.ul`
  display: flex;
  gap: 2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <MyName>Alba Mar</MyName>
      <nav>
        <NavUl>
          <li>Home</li>
          <li>About me</li>
          <li>Projects</li>
          <li>Contact</li>
        </NavUl>
      </nav>
    </StyledHeader>
  );
}

export default Header;

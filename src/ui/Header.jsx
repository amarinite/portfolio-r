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

const NavUl = styled.ul`
  display: flex;
`;

function Header() {
  return (
    <StyledHeader>
      <div>Alba Mar</div>
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

import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  background-color: rgba(0,0,255,0.5);

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  list-style-type: none;
`;

const Items = styled.li`
  color: rgba(255,255,255);

  font-size: 1.5rem;

  &:hover{
    font-weight: 500;
  }
`;

export { Nav, NavItems, Items };
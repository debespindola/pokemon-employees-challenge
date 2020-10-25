import React from 'react';
import { Link } from 'react-router-dom';

import { Nav, NavItems, Items } from './style';
 
const Navbar = () => {
  return (
    <Nav>
      <NavItems>
        <Link to='/home' style={{ textDecoration: 'none' }}>
          <Items>
            Home
          </Items>
        </Link>

        <Link to='/employees' style={{ textDecoration: 'none' }}>
          <Items>
            Employees
          </Items>
        </Link>

        <Link to='/pokemons' style={{ textDecoration: 'none' }}>
          <Items>
            Pokemons
          </Items>
        </Link>
      </NavItems>
    </Nav>
  );
}
 
export default Navbar;
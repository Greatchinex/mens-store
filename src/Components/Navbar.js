import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo1.svg';
import styled from 'styled-components';
import { Button } from '../StyleComponents/Button';

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
                    Creative Commons (Attribution 3.0 Unported);
                    https://www.iconfinder.com/Makoto_msk 
                */}
                <Link to="/">
                    <img src={Logo} alt="Cloth" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5"></li>
                    <Link to="/" className="nav-link"> Men's Store </Link>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <Button>
                        <span className="mr-2">
                            <i className="fa fa-cart-plus" />
                        </span>
                        My Cart
                    </Button>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background: var(--mainAccent);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3em;
        
    }
`

export default Navbar

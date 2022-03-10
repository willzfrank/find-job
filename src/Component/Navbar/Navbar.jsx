import React from "react";

import styled from "styled-components";
import logo from "../../img/logo1.svg";

function Navbar() {
  return (
    <Wrapper>
      <div className="navbar__image--container">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__list--container">
        <ul>
          <li>Home</li>
          <li>Near Jobs</li>
          <li>Find Jobs</li>
          <li>News</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar__button--container">
        <div className="navbar__button">+ Create Account</div>
      </div>
    </Wrapper>
  );
}

export default Navbar;

const Wrapper = styled.nav`
  border-bottom: 1px solid #f4f7f773;
  padding: 1rem 0rem;
  display: flex;
  justify-content: space-around;
  .navbar__image--container {
    height: 50px;
    img {
      height: 100%;
      width: 50px;
    }
  }
  .navbar__list--container {
    ul {
      margin-top: 1.2rem;
      display: flex;
      flex: 1;
      li {
        margin: 0 1rem;
        list-style: none;
        cursor: pointer;
        transition: 0.8s;
      }
      li:hover {
        color: var(--color-primary);
      }
    }
  }
  .navbar__button--container {
    .navbar__button {
      display: inline-block;
      background-color: var(--color-primary);
      padding: 1rem 1.7rem;
      border-radius: 7px;
      text-align: center;
      cursor: pointer;
      transition: 0.5s;
    }
  }
`;

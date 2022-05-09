import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home-icon.svg" />
          <span>HOME</span>
        </a>

        <a>
          <img src="/images/search-icon.svg" alt="home-icon.svg" />
          <span>SEARCH</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg" alt="home-icon.svg" />
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src="/images/original-icon.svg" alt="home-icon.svg" />
          <span>ORIGNALS</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg" alt="home-icon.svg" />
          <span>MOVIES</span>
        </a>

        <a>
          <img src="/images/series-icon.svg" alt="home-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImg src="/images/profile.jpg" />
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  background-color: #090b13;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  justify-content: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        width: 100%;
        bottom: -6px;
        right: 0;
        left: 0;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.46, 0.45, 0.94, 1);
      }
    }
    &:hover span::after {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;

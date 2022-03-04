import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <NavigationStyled>
      <nav className="nav">
        <div className="nav_logo">
          <Link to="/">
            <img src="" alt="" />
          </Link>
        </div>
        <input type="checkbox" id="toggle-menu" />
        <div className="nav_item">
          <Link to="/home">
            <div className="header_option">
              <span className="header_optionLineOne hide"> </span>
              <span className="header_optionLineTwo">Home</span>
            </div>
          </Link>
          <Link to="/appointment">
            <div className="header_option">
              <span className="header_optionLineOne hide"> </span>
              <span className="header_optionLineTwo">Appointments</span>
            </div>
          </Link>
          <Link to="/dashboard">
            <div className="header_option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Dashboard</span>
            </div>
          </Link>
          {user?.email ? (
            <Link onClick={logOut} to="/">
              <div className="header_option auth-item">
                <span className="header_optionLineOne">
                  Hello, {user?.displayName}
                </span>
                <span className="header_optionLineTwo">Sign Out</span>
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <div className="header_option auth-item">
                <span className="header_optionLineOne">Hello, Guest</span>
                <span className="header_optionLineTwo">Sign In</span>
              </div>
            </Link>
          )}
        </div>
        <label htmlFor="toggle-menu" className="toggle">
          <FontAwesomeIcon icon={faBars} />
        </label>
      </nav>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  background-color: transparent;

  nav {
    height: 90px;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    margin: 0 50px;

    @media (max-width: 688px) {
      height: 70px;
      margin: 0 0px;
      z-index: 0px;
    }

    .nav_logo {
      width: 100px;
      img {
        width: 127;
        height: 48px;
        object-fit: contain;
      }
    }
    #toggle-menu {
      display: none;
    }
    .toggle {
      color: #10cfe6;
      display: none;
      margin-right: 20px;
      font-size: 30px;
    }
    #toggle-menu:checked ~ .nav_item {
      transform: translateY(0px);
    }

    .nav_item {
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
      }
      .header_option {
        display: flex;
        flex-direction: column;
        .hide {
          display: none;
        }

        .header_optionLineOne {
          font-size: 10px;
          margin-bottom: 5px;
          @media (max-width: 700px) {
            margin-top: 20px;
          }
        }

        .header_optionLineTwo {
          font-size: 13px;
          font-weight: 800;
        }
      }
      a {
        font-size: 14px;
        font-weight: 600;
        line-height: 9px;
        letter-spacing: 0.4px;
        color: black;
        margin-left: 40px;
      }
      a:nth-child(3) {
        color: white;
      }
      a:nth-child(4) {
        color: white;
      }

      @media (max-width: 700px) {
        a:nth-child(1) {
          margin-bottom: 20px;
        }
      }

      a:not(:last-child) {
        margin-right: 45px;
        @media (max-width: 688px) {
          margin-right: 0px;
        }
      }
    }
    //responsive
    @media (max-width: 688px) {
      .toggle {
        display: inline-block;
        z-index: -1;
      }
      .nav_item {
        position: absolute;
        background: rgb(128, 128, 128);
        width: 100%;
        height: 236px;
        top: 0;
        left: 0;
        transform: translateY(-500px);
        transition: 0.3s linear;
        z-index: -100;
        a {
          display: block;
          text-align: center;
          margin: 2px 0;
          font-size: 18px;
          color: white;
          margin-left: 0px;
        }
      }
    }
  }
`;

export default Navigation;

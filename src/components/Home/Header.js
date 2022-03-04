import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import Navigation from "../../shared/Navigation";
import PrimaryButton from "../../shared/PrimaryButton";
import CardPaper from "./CardPaper";

const background = {
  background: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
  height: "630px",
  width: "100%",
};

const Header = () => {
  return (
    <HeaderStyled style={background}>
      <Navigation />
      <div className="header">
        <div className="left">
          <h1>
            YOUR NEW SMILE <br /> STARTS HERE
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            inventore illum adipisci molestias quae magni officiis asperiores
            architecto maiores corrupti?
          </p>
          <Link to="/appointment">
            <PrimaryButton>Get Appointment</PrimaryButton>
          </Link>
        </div>
        <div className="right">
          <img src={chair} alt="" />
        </div>
      </div>
      <div className="paper_section">
        <CardPaper
          icon={<AccessTimeIcon sx={{ fontSize: "60px" }} />}
          title={"Opening Hours"}
          subtitle={"lore Ipsum is simply dummy text of  the pri"}
          color={"#1CC7C1"}
        />
        <div className="middle">
          <CardPaper
            icon={<LocationOnIcon sx={{ fontSize: "60px" }} />}
            title={"Visit our location"}
            subtitle={"Dhalapara, Ghatail, Tangail, Dhaka, Bangladesh"}
            color={"#3A4256"}
          />
        </div>
        <CardPaper
          icon={<WifiCalling3Icon sx={{ fontSize: "60px" }} />}
          title={"Contact us now"}
          subtitle={"+8801736919983"}
          color={"#1CC7C1"}
        />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  .header {
    width: 100%;
    height: 630px;
    display: flex;
    margin-top: -70px;
    justify-content: space-between;
    align-items: center;
    &::after {
      content: "";
      position: absolute;
      height: 630px;
      width: 25%;
      background-color: #3a4256;
      transition: all 0.4s ease-in-out;
      left: 1010px;
      top: 0;
      opacity: 1;
      z-index: -1;
      display: block;
    }
    @media (max-width: 688px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 24px;

      &::after {
        content: "";
        position: absolute;
        height: 0px;
        width: 0%;
        background-color: #3a4256;
        transition: all 0.4s ease-in-out;
        left: 0px;
        top: 0;
        opacity: 1;
        z-index: -1;
        display: block;
      }
    }
    .left {
      width: 50%;
      padding-left: 80px;
      padding-right: 20px;
      h1 {
        font-size: 48px;
        color: #203047;
      }
      p {
        color: #c1c1c1;
        font-size: 16px;
        font-weight: 100;
      }
      @media (max-width: 688px) {
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
        h1 {
          font-size: 28px;
        }
        p {
          text-align: justify;
        }
        button {
          margin-top: 20px;
        }
      }
    }
    button {
      margin-top: 28px;
    }
    .right {
      width: 50%;
      img {
        width: 90%;
      }
      @media (max-width: 688px) {
        width: 100%;
        padding: 0 10px;
        margin-top: 20px;
        img {
          width: 100%;
        }
      }
    }
  }
  .paper_section {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -70px;
    :nth-child(2) {
      background-color: red;
    }
    @media (max-width: 688px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default Header;

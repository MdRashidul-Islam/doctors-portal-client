import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import login from "../assets/images/login.png";
import useAuth from "../hooks/useAuth";
import PrimaryButton from "../shared/PrimaryButton";
import google from "../assets/images/Group 573.png";
import Navigation2 from "../shared/Navigation2";

const Login = () => {
  const { signWithEmail, googleSignIn } = useAuth();
  const [loginData, setLoginData] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSignIn(location, navigate);
  };

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLogin = (e) => {
    signWithEmail(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
  };

  return (
    <LoginPageStyled>
      <Navigation2 />
      <div className="login">
        <div className="left">
          <div className="form_section">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <TextField
                sx={{ width: "100%", mt: "10px" }}
                id="standard-basic"
                label="Email"
                variant="standard"
                name="email"
                onBlur={handleOnBlur}
                type="email"
              />{" "}
              <br />
              <TextField
                sx={{ width: "100%", mt: "18px" }}
                id="standard-basic"
                label="Password"
                variant="standard"
                name="password"
                onBlur={handleOnBlur}
                type="password"
              />
              <PrimaryButton
                sx={{
                  mt: "20px",
                  width: "100%",
                  borderRadius: "0px",
                  padding: "10px 30px",
                }}
                type="submit"
              >
                Login
              </PrimaryButton>
              <Link className="go_register" to="/register">
                <button>New here? Please Register.</button>
              </Link>
            </form>
            <br />
            <Link onClick={handleGoogleLogin} to="">
              <div className="login_btn">
                <img src={google} alt="" />
                <button>Continue with google</button>
              </div>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="image_section">
            <img src={login} width="80%" alt="" />
          </div>
        </div>
      </div>
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  @media (max-width: 700px) {
    margin-top: 30px;
  }
  .login {
    height: 450px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 700px) {
      display: flex;
      flex-direction: column;
    }
    .left {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .form_section {
        box-shadow: 1px 1px 10px 1px #f0eded;
        padding: 30px 20px;
        border-radius: 3px;
        .go_register {
          button {
            margin-left: 60%;
            border: none;
            background: none;
            color: blue;
          }
          @media (max-width: 700px) {
            button {
              margin-left: 46%;
            }
          }
        }
        .login_btn {
          height: 30px;
          width: 200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid gray;
          margin: 0 auto;
          padding: 0 10px;
          border-radius: 71px;
          img {
            width: 20px;
            height: 20px;
          }
          button {
            border: none;
            background: none;
          }
          @media (max-width: 700px) {
            button {
            }
          }
        }
      }
      @media (max-width: 700px) {
        width: 100%;
      }
    }
    .right {
      width: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      @media (max-width: 700px) {
        width: 100%;
      }
      .image_section {
        width: 460px;
        padding: 20px;
        img {
          width: 100%;
        }
      }
    }
    /* @media (max-width: 700px) {
      width: 100%;
      .image_section {
        width: 700px;
      }
    } */
  }
`;

export default Login;

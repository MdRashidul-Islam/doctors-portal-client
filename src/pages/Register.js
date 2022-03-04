import { CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import login from "../assets/images/login.png";
import useAuth from "../hooks/useAuth";
import PrimaryButton from "../shared/PrimaryButton";
import Spinner from "../shared/Spinner";

const Register = () => {
  const { registerUser, isLoading } = useAuth();
  const [loginData, setLoginData] = useState({});

  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleRegister = (e) => {
    if (loginData.password !== loginData.password2) {
      Swal.fire("Opps!", "Your Password did not match!", "error");
      return;
    }

    registerUser(loginData.name, loginData.email, loginData.password, navigate);
    e.preventDefault();
  };
  return (
    <RegisterPageStyled>
      <div className="register">
        <div className="left">
          <div className="form_section">
            <h2>Register</h2>
            {!isLoading && (
              <form onSubmit={handleRegister}>
                <TextField
                  sx={{ width: "100%", mt: "10px" }}
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  name="name"
                  onBlur={handleOnBlur}
                  type="text"
                />{" "}
                <br />
                <TextField
                  sx={{ width: "100%", mt: "18px" }}
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  name="email"
                  onBlur={handleOnBlur}
                  type="email"
                />
                <TextField
                  sx={{ width: "100%", mt: "18px" }}
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  name="password"
                  onBlur={handleOnBlur}
                  type="password"
                />
                <TextField
                  sx={{ width: "100%", mt: "18px" }}
                  id="standard-basic"
                  label="Re-Type Password"
                  variant="standard"
                  name="password2"
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
                  Register
                </PrimaryButton>
                <Link className="go_register" to="/login">
                  <button>Already registered? Please sing in</button>
                </Link>
              </form>
            )}
            {isLoading && <Spinner style={{ textAlign: "center" }} />}
          </div>
        </div>
        <div className="right">
          <div className="image_section">
            <img src={login} width="80%" alt="" />
          </div>
        </div>
      </div>
    </RegisterPageStyled>
  );
};

const RegisterPageStyled = styled.div`
  @media (max-width: 700px) {
    margin-top: 30px;
  }
  .register {
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
        width: 80%;
        .go_register {
          button {
            margin-left: 55%;
            border: none;
            background: none;
            color: blue;
          }
          @media (max-width: 700px) {
            button {
              margin-left: 10%;
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
        width: 520px;
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

export default Register;

import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import PrimaryButton from "../../shared/PrimaryButton";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:4000/doctors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <AddDoctorStyled>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textAlign: "center", color: "#6FCFCF" }}>ADD DOCTOR</h3>
        <input
          {...register("name", { required: true })}
          placeholder="DOCTORS NAME"
        />
        <input
          {...register("qualification", { required: true })}
          placeholder="QUALIFICATION"
        />
        <input
          {...register("img", { required: true })}
          placeholder="DOCTORS IMAGE URL"
        />

        <input
          type="number"
          {...register("number", { required: true })}
          placeholder="DOCTORS NUMBER"
        />

        <textarea
          {...register("description", { required: true })}
          placeholder="DESCRIPTION"
        />

        <PrimaryButton type="submit">ADD DOCTOR</PrimaryButton>
      </form>
    </AddDoctorStyled>
  );
};

const AddDoctorStyled = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 3px;
    input {
      height: 40px;
      margin-bottom: 10px;
      border-radius: 3px;
      border: none;
    }
    textarea {
      height: 120px;
      margin-bottom: 10px;
      border-radius: 3px;
      border: none;
    }
  }
`;

export default AddDoctor;

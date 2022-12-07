import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AddHandler } from "../redux/todos";

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if ((title, body === "")) return;
    setTitle("");
    setBody("");

    dispatch(
      AddHandler({
        id: Date.now(),
        title,
        body,
        isDone: false,
      })
    );
  };
  return (
    <TopForm onSubmit={onSubmitHandler}>
      <label>
        제목
        <FormInput
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></FormInput>
      </label>
      <label>
        내용
        <FormInput
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></FormInput>
      </label>
      <FormButton>추가하기</FormButton>
    </TopForm>
  );
};

export default Form;

const FormButton = styled.button`
  width: 100px;
  border-radius: 10px;
  font-size: 20px;
  background-color: green;
  color: white;
  border: 1px solid white;
  :hover {
    border: 3px solid white;
  }
`;

const FormInput = styled.input`
  width: 200px;
  margin-left: 20px;
  border-radius: 10px;
  font-size: 20px;
  border: 2px solid gray;
`;

const TopForm = styled.form`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: gray;
  border-radius: 15px;
`;

import React from "react";
import styled from "styled-components";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Todo from "./Todo";

const LayOut = () => {
  return (
    <LayoutBox>
      <Header />
      <Form />
      <List />
      <Todo />
    </LayoutBox>
  );
};

export default LayOut;

const LayoutBox = styled.div`
  width: 1200px;
  height: 800px;
  margin: 0 auto;
`;

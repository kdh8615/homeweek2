import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <TopHeader>
      <Toph3>MY Todo List</Toph3>
      <Toph3>React</Toph3>
    </TopHeader>
  );
};
export default Header;

const Toph3 = styled.h3`
  padding: 0 20px;
`;

const TopHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
`;

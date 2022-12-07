import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Todopage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const locate = useSelector((state) => state.todos.todos);
  console.log(locate);
  const sangsea = locate.find((sangsea) => sangsea.id === parseInt(param.id));
  return (
    <AllSt>
      <SubSt>
        <div>ID:{sangsea.id}</div>
        <Tbtn
          onClick={() => {
            navigate("/");
          }}
        >
          이전으로
        </Tbtn>
      </SubSt>
      <h1>{sangsea.title}</h1>
      <h2>{sangsea.body}</h2>
    </AllSt>
  );
};

export default Todopage;

const AllSt = styled.div`
  width: 400px;
  height: 400px;
  border: 1px solid gray;
  border-radius: 10px;
  margin: auto;
  padding: 30px;
`;

const SubSt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Tbtn = styled.button`
  background-color: transparent;
  border: 1px solid black;
  font-size: 20px;
  padding: 5px;
  border-radius: 10px;
`;

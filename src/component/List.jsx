import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Complete, DeleteHandler } from "../redux/todos";
import { useNavigate } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.todos.todos);
  const navigate = useNavigate();
  const deleteHandler = (id) => {
    dispatch(DeleteHandler(id));
  };
  const completeHandler = (id) => {
    dispatch(Complete(id));
  };
  return (
    <div>
      <h1>Working🔥</h1>
      <TodoBox>
        {todolist.map((list) => {
          if (list.isDone === false) {
            return (
              <ListBox key={list.id}>
                <Sangsea
                  onClick={() => {
                    navigate(`/Todopage/${list.id}`);
                  }}
                >
                  상세페이지
                </Sangsea>
                <h1>{list.title}</h1>
                <h2>{list.body}</h2>
                <ListButton
                  onClick={() => {
                    deleteHandler(list.id);
                  }}
                  BtnCol="red"
                >
                  삭제
                </ListButton>
                <ListButton
                  BtnCol="green"
                  onClick={() => {
                    completeHandler(list.id);
                  }}
                >
                  완료
                </ListButton>
              </ListBox>
            );
          } else {
            return null;
          }
        })}
      </TodoBox>
    </div>
  );
};

export default List;

export const TodoBox = styled.div`
  width: 100%;
  margin: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ListBox = styled.div`
  width: 330px;
  height: 200px;
  border: 5px solid green;
  padding: 10px;
  border-radius: 10px;
`;

export const ListButton = styled.button`
  width: 70px;
  background-color: transparent;
  border: 1px solid ${(props) => props.BtnCol};
  margin-right: 30px;
  border-radius: 20px;
`;

export const Sangsea = styled.button`
  border: 1px solid white;
  border-bottom: 1px solid black;
  background-color: transparent;
  :hover {
    border-bottom: 2px solid black;
  }
`;

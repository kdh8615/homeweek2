import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteHandler } from "../redux/todos";
import { TodoBox, ListBox, ListButton, Sangsea } from "./List";
import { Complete } from "../redux/todos";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state.todos.todos);
  const deleteHandler = (id) => {
    dispatch(DeleteHandler(id));
  };
  const completeHandler = (id) => {
    dispatch(Complete(id));
  };
  return (
    <div>
      <h1>Done๐ค</h1>
      <TodoBox>
        {todolist.map((list) => {
          if (list.isDone === true) {
            return (
              <ListBox key={list.id}>
                <Sangsea
                  onClick={() => {
                    navigate(`/Todopage/${list.id}`);
                  }}
                >
                  ์์ธํ์ด์ง
                </Sangsea>
                <h1>{list.title}</h1>
                <h2>{list.body}</h2>
                <ListButton
                  onClick={() => {
                    deleteHandler(list.id);
                  }}
                  BtnCol="red"
                >
                  ์ญ์ 
                </ListButton>
                <ListButton
                  BtnCol="green"
                  onClick={() => {
                    completeHandler(list.id);
                  }}
                >
                  ์ทจ์
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

export default Todo;

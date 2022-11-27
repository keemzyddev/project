import React, { useEffect } from "react";
import Todo from "./Todo/Todo";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getTodos } from "../../redux/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();

  const { todoList } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <>
      {todoList.map((todo, index) => (
        <Todo
          key={index}
          id={todo.userId}
          title={todo.title}
          reminder={todo.reminder}
        />
      ))}
    </>
  );
};

export default Todos;

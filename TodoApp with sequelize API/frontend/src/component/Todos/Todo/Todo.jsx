import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux/es/exports";
import { deleteTodo, updateTodo } from "../../../redux/todoSlice";

const Todo = ({ id, title, reminder }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const onComplete = () => {
    dispatch(updateTodo({ id, reminder }));
  };
  return (
    <div
      className={`todo ${reminder ? "isComplete" : ""}`}
      onDoubleClick={onComplete}
    >
      <span className="">{title}</span>
      <FaTimes
        onClick={handleDelete}
        style={{ color: "red", cursor: "pointer" }}
      />
    </div>
  );
};

export default Todo;

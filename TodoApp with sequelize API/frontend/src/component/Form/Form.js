import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { createTodo } from "../../redux/todoSlice";

const Form = () => {
  const [title, setTitle] = useState("");
  const [reminder, setReminder] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    !title ? alert("Please Add To") : dispatch(createTodo({ title, reminder }));

    setTitle("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Todo</label>
        <input
          type="text"
          placeholder="Add a Todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder </label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn" type="submit" value="Save Todo" />
    </form>
  );
};

export default Form;

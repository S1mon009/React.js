import { useState, useEffect } from "react";
import Card from "../UI/card";
import "./addTaskForm.scss";

const AddTaskForm = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [formValid, setFormValid] = useState(false);

  const taskTitleHandler = (event) => {
    setTaskTitle(event.target.value);
  };
  const taskDateHandler = (event) => {
    setTaskDate(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(taskTitle, taskDate);
  };

  useEffect(() => {
    setFormValid(taskTitle.trim().length > 0 && taskDate.trim().length === 10);
  }, [taskTitle, taskDate]);

  return (
    <Card className="add-form" inset="100px 0 0 50%">
      <form onSubmit={formSubmitHandler}>
        <span className="form-title">Add task</span>
        <div className="form-item">
          <input
            type="text"
            id="task-title"
            value={taskTitle}
            onChange={taskTitleHandler}
            required
          ></input>
          <label htmlFor="task-title">Title</label>
        </div>
        <div className="form-item">
          <input
            type="date"
            id="task-date"
            value={taskDate}
            onChange={taskDateHandler}
            required
          ></input>
          <label htmlFor="task-date">Date</label>
        </div>

        <button type="submit" disabled={formValid ? false : true}>
          Save
        </button>
      </form>
    </Card>
  );
};

export default AddTaskForm;

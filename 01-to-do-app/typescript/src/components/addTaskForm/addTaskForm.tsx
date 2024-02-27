import { useState, useEffect, FC } from "react";
import "./addTaskForm.scss";

interface addTaskFormProps {
  onSubmit: (taskTitle: string, taskDate: string) => void;
}

const AddTaskForm: FC<addTaskFormProps> = (props) => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDate, setTaskDate] = useState<string>("");
  const [formValid, setFormValid] = useState<boolean>(false);

  const taskTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };
  const taskDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDate(event.target.value);
  };
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit(taskTitle, taskDate);
  };

  useEffect(() => {
    setFormValid(taskTitle.trim().length > 0 && taskDate.trim().length === 10);
  }, [taskTitle, taskDate]);

  return (
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
  );
};

export default AddTaskForm;

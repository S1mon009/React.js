import { useState } from "react";
import Logo from "./components/Logo/logo";
import AddTaskForm from "./components/addTaskForm/addTaskForm";
import TasksList from "./components/TasksList/tasksList";

function App() {
  const [tasks, setTasks] = useState([]);

  const AddTaskHandler = (taskTitle, taskDate) => {
    setTasks((previousTasks) => [
      ...previousTasks,
      { title: taskTitle, date: taskDate },
    ]);
  };
  const RemoveTaskHandler = (removeIndex) => {
    setTasks(tasks.filter((task, taskIndex) => taskIndex !== removeIndex));
  };

  return (
    <>
      <Logo />
      <AddTaskForm onSubmit={AddTaskHandler} />
      <TasksList list={tasks} onRemoveTaskHandler={RemoveTaskHandler} />
    </>
  );
}

export default App;

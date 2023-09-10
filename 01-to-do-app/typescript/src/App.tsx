import { useState } from "react";
import Logo from "./components/Logo/logo";
import AddTaskForm from "./components/addTaskForm/addTaskForm";
import TasksList from "./components/TasksList/tasksList";

interface tasksInterface {
  title: string;
  date: string;
}

function App() {
  const [tasks, setTasks] = useState<tasksInterface[]>([]);
  // console.log(tasks.map());

  const AddTaskHandler = (taskTitle: string, taskDate: string) => {
    // setTasks(tasks.push({ title: taskTitle, date: taskDate }));
    setTasks([...tasks, { title: taskTitle, date: taskDate }]);
    // setTasks((previousTasks: SetStateAction<never[]>) => [
    //   ...previousTasks,
    //   { title: taskTitle, date: taskDate },
    // ]);
  };
  const RemoveTaskHandler = (removeIndex: number) => {
    setTasks(
      tasks.filter(
        (task: tasksInterface, taskIndex: number) => taskIndex !== removeIndex
      )
    );
    // setTasks(
    //   tasks.filter(
    //     (task: string, taskIndex: number) => taskIndex !== removeIndex
    //   )
    // );
  };

  return (
    <>
      <Logo />
      <AddTaskForm onSubmit={AddTaskHandler} />
      <TasksList tasks={tasks} onRemoveTaskHandler={RemoveTaskHandler} />
    </>
  );
}

export default App;

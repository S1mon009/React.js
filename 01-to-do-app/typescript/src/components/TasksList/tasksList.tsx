import { FC } from "react";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import "./tasksList.scss";

defineElement(lottie.loadAnimation);

interface tasksListProps {
  tasks: any[];
  onRemoveTaskHandler: (removeIndex: number) => void;
}

const TasksList: FC<tasksListProps> = (props) => {
  return (
    <div className="tasks-container">
      {props.tasks &&
        props.tasks.map((listItem: any, listIndex: number) => (
          <div className="task-element">
            <div className="task-date">{listItem.date}</div>
            <div className="task-title">{listItem.title}</div>
            <span
              className="trash-icon"
              onClick={() => props.onRemoveTaskHandler(listIndex)}
            >
              <lord-icon
                src="https://cdn.lordicon.com/gsqxdxog.json"
                trigger="hover"
                colors={"primary:#e5e4e9,secondary:#e5e4e9"}
                style={{ width: "30px", height: "30px" }}
              />
            </span>
          </div>
        ))}
    </div>
  );
};

export default TasksList;

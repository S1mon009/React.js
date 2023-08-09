import Card from "../UI/card";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { RxDragHandleDots2 } from "react-icons/rx";
import "./tasksList.scss";

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const TasksList = (props) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(props.list);
    const [reorderedTask] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedTask);

    props.onDragEnd(items);
  };

  return (
    <div className="tasks-container">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={props.list}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="drag-and-drop-container"
            >
              {props.list.map &&
                props.list.map((listItem, listIndex) => (
                  <Draggable
                    key={listIndex}
                    draggableId={listIndex.toString()}
                    index={listIndex}
                  >
                    {(provided) => (
                      <div
                        className="drag-element"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Card>
                          <div className="drag-icon">
                            <RxDragHandleDots2 size={16} />
                          </div>
                          <div className="drag-content">
                            <div className="drag-date">{listItem.date}</div>
                            <div className="drag-title">{listItem.title}</div>
                            <span
                              className="trash-icon"
                              onClick={() =>
                                props.onRemoveTaskHandler(listIndex)
                              }
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/gsqxdxog.json"
                                trigger="hover"
                                colors={"primary:#e5e4e9,secondary:#e5e4e9"}
                                style={{ width: "30px", height: "30px" }}
                              />
                            </span>
                          </div>
                        </Card>
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TasksList;

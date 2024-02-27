import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./tagsBox.scss";

const TagsBox = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };
  const handleDeleteTag = (index: number) => {
    setTags(tags.filter((tag: string, tagIndex: number) => tagIndex !== index));
  };

  return (
    <div className="add-tags-container">
      <div className="title">Add tags</div>
      <div className="tags-box">
        {tags.map((tag: string, index: number) => {
          return (
            <div
              className="tags"
              key={index}
              onClick={() => handleDeleteTag(index)}
            >
              <span>{tag}</span>
              <button onClick={() => handleDeleteTag(index)}>
                <AiFillCloseCircle />
              </button>
            </div>
          );
        })}
        <input
          type="text"
          autoFocus
          value={inputValue}
          onChange={(event: { target: HTMLInputElement }) =>
            setInputValue(event.target.value)
          }
          onKeyUpCapture={(event: React.KeyboardEvent) => handleAddTag(event)}
        />
      </div>
    </div>
  );
};

export default TagsBox;

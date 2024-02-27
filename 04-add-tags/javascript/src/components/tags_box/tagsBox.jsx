import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import "./tagsBox.scss";

const TagsBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleAddTag = (event) => {
    if (event.key === "Enter") {
      setTags([...tags, inputValue]);
      setInputValue("");
    }
  };
  const handleDeleteTag = (index) => {
    setTags(tags.filter((tag, tagIndex) => tagIndex !== index));
  };

  return (
    <div className="add-tags-container">
      <div className="title">Add tags</div>
      <div className="tags-box">
        {tags.map((tag, index) => {
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
          onChange={(event) => setInputValue(event.target.value)}
          onKeyUpCapture={(event) => handleAddTag(event)}
        />
      </div>
    </div>
  );
};

export default TagsBox;

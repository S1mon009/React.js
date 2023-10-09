import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/store";
import "./switchTheme.scss";

const SwitchTheme = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(themeActions.toggleTheme());
  };

  return (
    <div
      className="toggle-theme"
      style={{ background: theme === "" ? "#333" : "#ffc107" }}
    >
      <input
        type="checkbox"
        className="position-absolute"
        onChange={toggleTheme}
        checked={theme === "" ? false : true}
      />
      <i className="position-absolute bi bi-brightness-high"></i>
      <i className="position-absolute bi bi-moon"></i>
      <span
        className="position-absolute d-inline-block rounded-circle"
        style={{ background: theme === "" ? "#ffc107" : "#333" }}
      ></span>
    </div>
  );
};

export default SwitchTheme;

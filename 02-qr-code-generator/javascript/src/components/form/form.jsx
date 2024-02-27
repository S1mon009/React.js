import "./form.scss";
import Card from "../card/card";

const Form = (props) => {
  return (
    <form>
      <Card style={{ margin: "10px 0" }}>
        <input
          type="text"
          placeholder="Link"
          onChange={(event) => props.onHandleQrCodeInput(event.target.value)}
        />
      </Card>
    </form>
  );
};

export default Form;

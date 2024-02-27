import "./form.scss";
import { FC } from "react";
import Card from "../card/card";

interface formProps {
  onHandleQrCodeInput: (value: string) => void;
}

const Form: FC<formProps> = (props) => {
  return (
    <form>
      <Card style={{ margin: "10px 0" }}>
        <input
          type="text"
          placeholder="Link"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.onHandleQrCodeInput(event.target.value)
          }
        />
      </Card>
    </form>
  );
};

export default Form;

import { forwardRef } from "react";
import "./form.scss";

type FormProps = {
  getWeatherData: (event: any) => void;
};

const Form = forwardRef((props: FormProps, ref: any) => {
  return (
    <form
      className="w-100 d-flex justify-content-between align-items-center"
      onSubmit={props.getWeatherData}
    >
      <input
        type="text"
        placeholder="Your city"
        className="text-light bg-dark rounded-3 px-3"
        ref={ref}
      />
      <button className="btn btn-dark" type="submit">
        Check
      </button>
    </form>
  );
});

export default Form;

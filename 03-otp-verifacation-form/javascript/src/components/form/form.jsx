import { useState } from "react";
import OtpInput from "react18-input-otp";
import Button from "../UI/button";
import { MdRestartAlt } from "react-icons/md";
import "./form.scss";

const Form = () => {
  const [code, setCode] = useState(
    String(Math.floor(Math.random() * 999999)).padStart(6, 0)
  );
  const [codeInput, setCodeInput] = useState("");
  const [codeValid, setCodeValid] = useState("");

  const checkCodeInput = (event) => {
    event.preventDefault();
    codeInput === code ? setCodeValid("correct") : setCodeValid("wrong");
  };
  const regenerateCode = (event) => {
    event.preventDefault();
    setCode(String(Math.floor(Math.random() * 999999)).padStart(6, 0));
    setCodeInput("");
    setCodeValid("");
  };

  return (
    <form onSubmit={checkCodeInput}>
      <label className="code">{code}</label>
      <OtpInput
        isInputNum="true"
        value={codeInput}
        onChange={(enteredCode) => setCodeInput(enteredCode)}
        numInputs={6}
        isSuccessed={true}
        separateAfter={3}
        shouldAutoFocus
        containerStyle={{
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(10px)",
        }}
        inputStyle={{
          width: "35px",
          aspectRatio: "1/1",
          outline: "none",
          border: "2px solid #444",
          borderRadius: "5px",
          boxShadow: "0 0 2px rgba(0,0,0,0.2)",
        }}
        focusStyle={{ border: "2px solid #7026ed" }}
      />
      <label className="checked">
        {codeValid.trim().length > 0 ? (
          <span className={codeValid}>
            {codeValid.charAt(0).toUpperCase() + codeValid.slice(1)}!
          </span>
        ) : (
          ""
        )}
      </label>
      <Button className="submit" type="submit" content="Check code" />
      <Button
        className="regenerate"
        content="Regenerate code"
        icon={
          <MdRestartAlt
            style={{ fontSize: "20px", transform: "translateY(4px)" }}
          />
        }
        onClick={regenerateCode}
      />
    </form>
  );
};

export default Form;

import "./container.scss";
import { useState } from "react";
import Logo from "../../logo-black.svg";
import Card from "../card/card";
import QrCode from "../UI/qrCode";
import Form from "../form/form";

const Container = () => {
  const [inputQrCode, setInputQrCode] = useState<string>("");
  const HandleQrCodeInput = (value: string) => {
    setInputQrCode(value);
  };

  return (
    <div className="container">
      <img src={Logo} alt="Logo" />
      <Card>
        <QrCode qrCodeValue={inputQrCode} />
      </Card>
      <Form onHandleQrCodeInput={HandleQrCodeInput} />
    </div>
  );
};

export default Container;

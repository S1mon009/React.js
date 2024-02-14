import "./qrCode.scss";
import { FC } from "react";
import QRCode from "react-qr-code";

interface qrCodeProps {
  qrCodeValue: string;
}

const QrCode: FC<qrCodeProps> = (props) => {
  return (
    <div className="qr-code">
      <QRCode
        // title={"qrCode"}
        value={props.qrCodeValue}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-58%)",
          width: "180px",
          aspectRatio: "1/1",
        }}
      />
    </div>
  );
};

export default QrCode;

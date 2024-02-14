import "./qrCode.scss";
import QRCode from "react-qr-code";

const QrCode = (props) => {
  return (
    <div className="qr-code">
      <QRCode
        title="qrCode"
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

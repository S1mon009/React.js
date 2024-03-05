import Spline from "@splinetool/react-spline";

const SplineCube = ({ image }) => {
  return (
    <div>
      <Spline
        scene={image}
        style={{
          height: "600px",
          width: "clamp(400px,600px,650px)",
        }}
      />
    </div>
  );
};

export default SplineCube;

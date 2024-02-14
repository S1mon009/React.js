import Spline from "@splinetool/react-spline";

const SplineCube = () => {
  return (
    <div>
      <Spline
        scene="https://prod.spline.design/XFvUA1JiKwHfUbyP/scene.splinecode"
        style={{
          height: "600px",
          width: "clamp(400px,600px,650px)",
        }}
      />
    </div>
  );
};

export default SplineCube;

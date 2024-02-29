import { useRef } from "react";
import { useInView } from "framer-motion";

const SlideFromBottom = ({ once, className, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: once });
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className={className ? className : null}
    >
      {children}
    </div>
  );
};

export default SlideFromBottom;

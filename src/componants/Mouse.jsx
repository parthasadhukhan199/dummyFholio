import  { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Mouse = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };

  const trails = Array.from({ length: 6 }, (_, i) => ({
    x: useSpring(mouseX, { ...springConfig, delay: i * 0.02 }),
    y: useSpring(mouseY, { ...springConfig, delay: i * 0.02 }),
    scale: 1 - i * 0.1,
    opacity: 1 - i * 1.15,
    blur: i * .3,
  }));

  useEffect(() => {
    const moveMouse = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };
    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [mouseX, mouseY]);

  return (
    <>
      {trails.map((trail, index) => (
        <motion.div
          key={index}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: "white",
            x: trail.x,
            y: trail.y,
            scale: trail.scale,
            opacity: trail.opacity,
            pointerEvents: "none",
            zIndex: 9999,
            filter: `blur(${trail.blur}px)`,
            mixBlendMode: "difference", // optional for inverted color
          }}
        />
      ))}
    </>
  );
};

export default Mouse;

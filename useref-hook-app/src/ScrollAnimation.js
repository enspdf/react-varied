import { useState, useEffect, useRef } from "react";

const ScrollAnimation = () => {
  const [background, setBackground] = useState("pink");
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      const backgroudColor = y <= 0 ? "orange" : "pink";
      setBackground(backgroudColor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ height: "180vh", background }}>
        <h1>Scroll to change background-color</h1>
      </div>
    </div>
  );
};

export default ScrollAnimation;

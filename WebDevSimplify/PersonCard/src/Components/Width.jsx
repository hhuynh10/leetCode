import React, { useEffect, useState } from "react";

const Width = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const size = () => {
      return setWidth(window.innerWidth);
    };

    window.addEventListener("resize", size);

    return () => {
      window.removeEventListener("resize", size);
    };
  }, []);

  return <div style={{ fontSize: 24 }}>{width}</div>;
};

export default Width;

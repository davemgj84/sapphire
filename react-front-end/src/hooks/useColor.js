import { useEffect, useState } from "react";

const useColor = (defaultColor) => {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    window.selectColor = color;
  }, [color]);

  return { color, setColor };
};

export default useColor;

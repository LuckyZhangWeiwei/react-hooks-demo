import { useState } from "react";

export default function useAnimation(baseClassName, activeClassName) {
  let [className, setClassName] = useState(baseClassName);

  const start = () => {
    if (className === baseClassName) {
      setClassName(`${baseClassName} ${activeClassName}`);
    } else {
      setClassName(baseClassName);
    }
  };

  return [className, start];
}

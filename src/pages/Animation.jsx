import "./Animation.css";
import useAnimation from "./../hooks/useAnimation";

export default function Animation() {
  const [className, toggleColor] = useAnimation("circle", "active");
  return <div className={className} onClick={toggleColor}></div>;
}

import "./Plan.css";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Plan(props) {
  return (
    <div className="planCard">
      <img src={props.img} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <HiArrowLongRight className="rightArrow" />
    </div>
  );
}

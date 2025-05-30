import { useOutletContext } from "react-router-dom";

export default function SubCars(props) {
  const { activeUser } = useOutletContext();

  return (
    <div>
      <h3>SubCars</h3>
      {props.red} {props.green} {props.blue} {activeUser}
    </div>
  );
}

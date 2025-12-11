import { useContext } from "react";
import { CountContext } from "../contexts/CountContext";
import ChildOfGrandchild from "./ChildOfGrandchild";

const Grandchild = () => {
  const { count } = useContext(CountContext)!;
  return (
    <div style={{ backgroundColor: "green", width: "300px", height: "300px" }}>
      Grandchild Component {count}
      <ChildOfGrandchild/>
    </div>
  );
};
export default Grandchild;

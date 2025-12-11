import Grandchild from "./Grandchild";

const Child = () => {
  return (
    <div style={{backgroundColor: 'yellow', width: "500px", height: "500px"}}>
      Child Component
      <Grandchild />
    </div>
  );
};

export default Child;

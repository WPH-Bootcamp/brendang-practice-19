import useDarkTheme from "../store/useDarkTheme";

const ChildOfGrandchild = () => {
  const darkTheme = useDarkTheme((state) => state.darkTheme);
  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
      }}
    >
      Child of Grandchild Component
      <br></br>
      <span className="text-red-800">Ini contoh</span>
    </div>
  );
};
export default ChildOfGrandchild;

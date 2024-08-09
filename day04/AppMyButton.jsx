import MyButton from "./ButtonComponent/MyButton";

function App() {
  const stateArray = ["primary", "hover", "secondary", "deactive"];
  const shapeArray = ["round", "smooth", "hard"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "50px",
      }}
    >
      {stateArray.map((v) => {
        return shapeArray.map((x) => {
          return <MyButton shape={x} state={v}></MyButton>;
        });
      })}
    </div>
  );
}

export default App;

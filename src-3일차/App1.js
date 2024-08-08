import Box from "./BoxComponent/Box";
import Circle from "./CircleComponent/Circle";

function App() {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
  };

  const colors = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
  ];

  return (
    <div style={style}>
      {colors.map((v, i) => {
        return i % 2 == 0 ? (
          <Box backgroundColor={v}></Box>
        ) : (
          <Circle backgroundColor={v}></Circle>
        );
      })}
    </div>
  );
}

export default App;

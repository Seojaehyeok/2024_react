import BlueBox from "./BlueBox";
import Box from "./Box";
import GreenBox from "./GreenBox";
import Luckybiky from "./Luckybiky";
import RedCircle from "./RedCircle";
import Test from "./Test";
import YellowCircle from "./YellowCircle";

function App() {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "10px",
  };

  return (
    <div style={style}>
      {Array(1000)
        .fill()
        .map((x) => {
          return <BlueBox></BlueBox>;
        })}
    </div>
  );
}

export default App;

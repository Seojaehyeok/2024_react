import { FaHeart } from "react-icons/fa";
import Heart from "./Heart";

function App() {
  const sayHello = () => {
    console.log("안녕");
  };

  return (
    <div>
      <Heart shape={true}></Heart>
      <Heart shape={true}></Heart>
      <div onClick={sayHello}>아무글</div>
    </div>
  );
}

export default App;

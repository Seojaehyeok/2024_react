import ButtonCircle from "./ButtonComponent/ButtonCircle";
import ButtonHard from "./ButtonComponent/ButtonHard";
import ButtonSmooth from "./ButtonComponent/ButtonSmooth";
import MyButton from "./ButtonComponent/MyButton";

function App() {
  return (
    <div>
      <MyButton shape="round"></MyButton>
      <MyButton shape="smooth"></MyButton>
      <MyButton shape="hard"></MyButton>
    </div>
  );
}

export default App;

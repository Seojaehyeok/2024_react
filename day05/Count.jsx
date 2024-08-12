import { useState } from "react";

const Count = (props) => {
  // react : props + state(상태)

  // useState(초깃값)
  const [num, setnum] = useState(10);
  const [fruits, setFruits] = useState("🍒");

  const changeFruits = () => {
    if (fruits === "🍒") setFruits("🍓");
    else if (fruits === "🍓") setFruits("🍒");
  };

  const changeNum = () => {
    setnum(num + 1);
  };

  return (
    <>
      <div onClick={changeNum}>{num}</div>
      <div onClick={changeFruits}>{fruits}</div>
    </>
  );
};

export default Count;

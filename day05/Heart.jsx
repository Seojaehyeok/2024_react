import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";

const Heart = (props) => {
  const [heart, setHeart] = useState(false);
  const changeHeart = () => {
    setHeart(!heart);
  };
  return (
    <>
      <div onClick={changeHeart}>
        {heart ? <FaHeart /> : <IoIosHeartEmpty />}
      </div>
    </>
  );
};

export default Heart;

import { useState } from "react";

const Box = (props) => {

    const [color, setColor] = useState("blue");

    const style = {
        backgroundColor: color,
    };

    const changeColor = () => {
        setColor(color === "blue" ? "red" : "blue");
    }
    
    
    return (
          <div className="w-24 h-80" style={style} onClick={changeColor}></div>
    );
}

export default Box;
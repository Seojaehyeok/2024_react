const Circle = (props) => {
  const boxStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "9999px",
    backgroundColor: props.backgroundColor,
  };

  return <div style={boxStyle}></div>;
};

export default Circle;

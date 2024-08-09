const MyButton = (props) => {
  const shape = {
    hard: "0px",
    smooth: "5px",
    round: "45px",
  };

  //   const colors = {
  //     first: "#205BF3",
  //     second: "#478DF5",
  //     third: "transeParent",
  //     forth: "#979797",
  //   };
  //   const fColor = {
  //     white: "white",
  //     black: "black",
  //   };

  //   const bor = {
  //     none: "none",
  //     exist: "2px solid #205BF3",
  //   };

  const state = {
    primary: {
      backgroundColor: "#205BF3",
      color: "white",
      border: "none",
    },
    hover: {
      backgroundColor: "#478DF5",
      color: "white",
      border: "none",
    },
    secondary: {
      backgroundColor: "#transParent",
      color: "black",
      border: "1px solid #205BF3",
    },
    deactive: {
      backgroundColor: "#979797",
      color: "#E8E8E8",
      border: "none",
    },
  };

  const style = {
    padding: "10px 45px",
    borderRadius: shape[props.shape],
    fontSize: "32px",
    ...state[props.state], // ...연산자: 오브젝트 껍데기 벗겨줌
  };

  return <button style={style}>Button</button>;
};

export default MyButton;

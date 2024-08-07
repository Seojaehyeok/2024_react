const Box = () => {
  // 1. css를 js화 할 때는 중괄호 2개 필요
  const boxStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid black",
  };

  // 초록박스, 파란박스, 빨간원, 노랑원 컴포넌트 만들고 화면 출력

  return <div style={boxStyle}></div>;
};

export default Box;

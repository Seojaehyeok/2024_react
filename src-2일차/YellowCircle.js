const YellowCircle = () => {
  // 1. css를 js화 할 때는 중괄호 2개 필요
  const circleStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "9999px",
    backgroundColor: "yellow",
  };

  // 초록박스, 파란박스, 빨간원, 노랑원 컴포넌트 만들고 화면 출력

  return <div style={circleStyle}></div>;
};

export default YellowCircle;

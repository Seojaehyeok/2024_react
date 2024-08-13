const Circle = (props) => {
    // 둥글게 만들고, 배경색은 하늘색 옅은갣으로 만들고,
    // 글씨는 크게 해주고, 가운데로 배치해주고 글씨는 props 
    return <div className="w-20 h-20 text-lg rounded-full bg-sky-200 flex justify-center items-center" >{props.name}</div>;
}

export default Circle;
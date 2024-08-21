const Diary = (props) => {
    return (
    <span>
        <span className="font-semibold">{props.name || "no name"} </span>The game in Japan was amazing and I wnat to share some photos
    </span>
    );
};

export default Diary;
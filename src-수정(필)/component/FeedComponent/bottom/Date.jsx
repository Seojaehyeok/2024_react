const Date = (props) => {
    return (
        <span className="text-gray-400">{props.date || "no date"}</span>
    );
};

export default Date;
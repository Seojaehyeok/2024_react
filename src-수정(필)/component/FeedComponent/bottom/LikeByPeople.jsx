const LikeByPeople = (props) => {
    
    const {likePeople} = props;

    return !!likePeople ? 
    (
    <span style={{color: "#262626"}}>
        Liked by <span className="font-semibold">{likePeople[0]}</span> and{" "}
        <span className="font-semibold">{likePeople.length - 1}</span> others
    </span>
    )
    : (
    <span>no likes</span>
    )
};

export default LikeByPeople;
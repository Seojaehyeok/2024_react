const FeedPhoto = (props) => {
    console.log(props.image)
    return(
        <div className="snap-center min-w-full">
            <img  className="w-full h-full object-cover" src={props.image || "tokyo.jpg"} alt="" />
        </div>
    );
};

export default FeedPhoto;
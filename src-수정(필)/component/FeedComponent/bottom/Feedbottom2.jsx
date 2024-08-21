import Comment from "./Comment";
import FeedBottom from "./FeedBottom";
import Like from "./Like";

const Feedbottom2 = (props) => {
    return (
        <>
        <FeedBottom />
        <Like {...props}/>
        <Comment {...props}/>
        </>
    );
};

export default Feedbottom2;

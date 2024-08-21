import Feedbottom2 from "./bottom/Feedbottom2";
import FeedHeader from "./header/FeedHeader";
import FeedSnap from "./photo/FeedSnap";

const Feed = (props) => {

    return(
    <>
        <FeedHeader {...props}/>
        <FeedSnap {...props}/>
        <Feedbottom2 {...props}/>
            
    </>
    )
};

export default Feed;

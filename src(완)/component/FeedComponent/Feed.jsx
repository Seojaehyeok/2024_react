import Feedbottom2 from "./bottom/Feedbottom2";
import FeedHeader from "./header/FeedHeader";
import FeedSnap from "./photo/FeedSnap";

const Feed = (props) => {

    return(
    <div className="pb-16">
        <FeedHeader {...props}/>
        <FeedSnap {...props}/>
        <Feedbottom2 {...props}/>
            
    </div>
    );
};

export default Feed;
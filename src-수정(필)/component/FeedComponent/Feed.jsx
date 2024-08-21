import Feedbottom2 from "./bottom/Feedbottom2";
import FeedHeader from "./header/FeedHeader";
import FeedSnap from "./photo/FeedSnap";

const Feed = () => {

    const data = {
        image:"/story/story0.jpg",
        name: "Joshua",
        isPopular: false,
        city: "Tokyo",
        nation: "Japan",
        images: ["sapporo.jpg", "osaka.jpg", "tokyo.jpg"],
        likePeople : ["craig_live", "jeanseal", "seo", "bae", "woo", "choi", "kim"],
        date: "September 19",
    };

    

    return(
    <>
        <FeedHeader {...data}/>
        <FeedSnap {...data}/>
        <Feedbottom2/>
            
    </>
    )
};

export default Feed;
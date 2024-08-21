import Comment from "./Comment";
import FeedBottom from "./FeedBottom";
import Like from "./Like";

const Feedbottom2 = () => {

    const data = {
        image:"story/story0.jpg",
        likePeople : ["craig_live", "jeanseal", "seo", "bae", "woo", "choi", "kim"],
        name: "Joshua",
        date: "September 19",
        
    };

    return (
        <>
        <FeedBottom />
        <Like {...data}/>
        <Comment {...data}/>
        </>
    );
};

export default Feedbottom2;
import FeedPhoto from "./FeedPhoto";

const FeedSnap = () => {
    return (
        <div className="hide-scrollbar flex w-full h-96 snap-x snap-mandatory overflow-x-scroll">
            <FeedPhoto image="tokyo.jpg"/>
            <FeedPhoto image="osaka.jpg"/>
            <FeedPhoto image="sapporo.jpg"/>
        </div>
    );
};

export default FeedSnap;
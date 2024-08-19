

import Feed from "./FeedComponent/Feed";
import Header from "./Header";
import Navigation from "./Navigation";
import StoryBoard from "./StoryComponent/StoryBoard";

const Instargram = () => {
    return (
        <div className="w-screen h-screen">
          <div className="w-full h-full max-w-sm m-auto">
            <Header />
            <StoryBoard friends={6} />
            <Feed />
            <Navigation />
          </div>        
        </div>
      );
};

export default Instargram;
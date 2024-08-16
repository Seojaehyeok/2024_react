
import Header from "./Header";
import Navigation from "./Navigation";
import StoryBoard from "./PhotoComponent/StoryBoard";

const Instargram = () => {
    return (
        <div className="w-screen h-screen">
          <div className="w-full h-full max-w-sm m-auto">
            <Header />
            <StoryBoard friends={6} />
            <Navigation />
          </div>        
        </div>
      );
};

export default Instargram;

import Header from "./Header";
import Navigation from "./Navigation";

const Instargram = () => {
    return (
        <div className="w-screen h-screen">
          <div className="w-full h-full max-w-sm m-auto">
            <Navigation></Navigation>
          </div>
          <div className="w-full h-full max-w-sm m-auto">
            <Header></Header>
          </div>
        </div>
      );
};

export default Instargram;
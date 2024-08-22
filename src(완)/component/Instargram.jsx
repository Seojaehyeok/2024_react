
import Feed from "./FeedComponent/Feed";
import Header from "./Header";
import Navigation from "./Navigation";
import StoryBoard from "./StoryComponent/StoryBoard";

const Instargram = () => {

  const data = [
    {
        image:"./story/story0.jpg",
        name: "Joshua",
        isPopular: false,
        city: "Tokyo",
        nation: "Japan",
        images: ["feeds/feed0.jpg","feeds/feed1.jpg","feeds/feed2.jpg"],
        likePeople : ["craig_live", "jeanseal", "seo", "bae", "woo", "choi", "kim"],
        date: "September 19",
  },
  {
        image:"./story/story1.jpg",
        name: "Jinseal",
        isPopular: false,
        city: "Seoul",
        nation: "Korea",
        images: ["feeds/feed3.jpg","feeds/feed4.jpg","feeds/feed5.jpg"],
        likePeople : ["craig_live", "abc", "biden", "kfc"],
        date: "September 21",
  },
  {
        image:"./story/story2.jpg",
        name: "Biden",
        isPopular: true,
        city: "New York",
        nation: "USA",
        images: ["feeds/feed6.jpg","feeds/feed7.jpg","feeds/feed8.jpg"],
        likePeople : ["Trump", "harrison", "xijinping"],
        date: "September 25",
  },
  {
    image:"./story/story4.jpg",
    name: "Seo",
    isPopular: true,
    city: "Incheon",
    nation: "Korea",
    images: ["feeds/feed9.jpg","feeds/feed10.jpg"],
    likePeople : ["Trump", "harrison", "xijinping"],
    date: "September 26",
},
            
               
  ];



  return (
      <div className="w-screen h-screen">
        <div className="w-full h-full max-w-sm m-auto">
          <Header />
          <StoryBoard />
          {data.map((v) => <Feed {...v}/>)}             
          <Navigation />
        </div>        
      </div>
    );
};

export default Instargram;
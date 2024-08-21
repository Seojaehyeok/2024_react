import { CiBookmark} from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoChatbubbleOutline, IoPaperPlaneOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const FeedBottom = (props) => {

    const [heart, setHeart] = useState(false);

    const changeHeart = () => {
        setHeart(!heart);
      };
    
    return (
        <div className="w-full flex justify-between items-center text-2xl p-2">
            <div className="flex flex-1 items-center gap-5">
                <div  onClick={changeHeart}>
                {heart ? <FaRegHeart /> : <FaHeart />}
                </div>
                <IoChatbubbleOutline />
                <IoPaperPlaneOutline />
            </div>
            <div className="flex-1 flex justify-center">
                <HiOutlineDotsHorizontal />
            </div>
            
            <div className="flex-1 flex justify-end">
                <CiBookmark />
            </div>       
            

        </div>
    );
};

export default FeedBottom;
import { CiBookmark} from "react-icons/ci";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoChatbubbleOutline, IoPaperPlaneOutline } from "react-icons/io5";
import Icon from "../../Icon";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const FeedBottom = (props) => {

    const [heart, setHeart] = useState(false);

    const changeHeart = () => {
        setHeart(!heart);
      };
    
    return (
        <div className="w-full flex justify-between items-center text-2xl">
            <div className="w-20 flex items-center gap-5" onClick={changeHeart}>
                {heart ? <Icon IconComponent={FaRegHeart} ></Icon> : <Icon IconComponent={FaHeart} ></Icon>}
                <Icon IconComponent={IoChatbubbleOutline} ></Icon>
                <Icon IconComponent={IoPaperPlaneOutline} ></Icon>
            </div>
            <div>
                <Icon IconComponent={HiOutlineDotsHorizontal} ></Icon>
            </div>
            
            <div>
                <Icon IconComponent={CiBookmark} ></Icon>
            </div>       
            

        </div>
    );
};

export default FeedBottom;
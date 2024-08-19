
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import NameLabel from "./NameLabel";
import PlaceLabel from "./PlaceLabel";
import Icon from "../../Icon";
import Photo from "../../PhotoComponent/Photo";

const FeedHeader = () => {

    return(
        <div className=" w-full flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
                <Photo size="medium"/>
                <div className="flex flex-col items-center gap-1">
                    <NameLabel isPopular={true}/>
                    <PlaceLabel/>
                </div>
            </div>
            <Icon IconComponent={HiOutlineDotsHorizontal}></Icon>
        </div>
    );
};

export default FeedHeader;
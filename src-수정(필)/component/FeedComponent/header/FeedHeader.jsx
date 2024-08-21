
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import NameLabel from "./NameLabel";
import PlaceLabel from "./PlaceLabel";
import Photo from "../../PhotoComponent/Photo";

const FeedHeader = (props) => {


    return(
        <div className="p-2 flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
                <Photo image={props.image} size="medium"/>
                <div className="flex flex-col items-center gap-1">
                    <NameLabel name={props.name} isPopular={props.isPopular}/>
                    <PlaceLabel city={props.city} nation={props.nation} />
                </div>
            </div>
            <div><HiOutlineDotsHorizontal className="text-xl"/>
            </div>
        </div>
    );
};

export default FeedHeader;

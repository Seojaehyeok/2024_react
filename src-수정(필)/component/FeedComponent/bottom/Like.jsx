import Photo from "../../PhotoComponent/Photo";
import LikeByPeople from "./LikeByPeople";

const Like = (props) => {




    return (
    <div className="p-2 flex items-center gap-2">
        <Photo image={props.image} size="small"/>
        <LikeByPeople likePeople={props.likePeople}/>
    </div>
    )
};

export default Like;
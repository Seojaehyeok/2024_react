import Photo from "../../PhotoComponent/Photo";
import LikeByPeople from "./LikeByPeople";

const Like = () => {

    const likePeople = ["craig_live", "jeanseal", "seo", "bae", "woo", "choi", "kim"]

    return (
    <div className="flex items-center gap-2">
        <Photo size="small"/>
        <LikeByPeople likePeople={likePeople}/>
    </div>
    )
};

export default Like;
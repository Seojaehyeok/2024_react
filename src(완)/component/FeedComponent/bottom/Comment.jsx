import Date from "./Date";
import Diary from "./Diary";

const Comment = (props) => {
    return (
        <div className="px-2">
            <div>
                <Diary name = {props.name} />
            </div>

            <div>
                <Date date={props.date}/>
            </div>
        </div>
    )
};

export default Comment;
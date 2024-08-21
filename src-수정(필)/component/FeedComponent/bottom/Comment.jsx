import Date from "./Date";
import Diary from "./Diary";

const Comment = (props) => {
    return (
        <>
            <div className="px-2">
                <Diary name = {props.name} />
            </div>

            <div className="px-2">
                <Date date={props.date}/>
            </div>
        </>
    )
};

export default Comment;
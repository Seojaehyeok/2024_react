import { AiFillHome } from "react-icons/ai";
import { CiHeart, CiSquarePlus } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import Icon from "./Icon";
import Photo from "./PhotoComponent/Photo";

const Navigation = () => {
    return(
        <footer style={{backgroundColor: "#FAFAFA"}} className="fixed bottom-0 w-full max-w-sm m-auto flex justify-around items-center py-2">
            <Icon IconComponent={AiFillHome}></Icon>
            <Icon IconComponent={IoSearchOutline}></Icon>
            <Icon IconComponent={CiSquarePlus}></Icon>
            <Icon IconComponent={CiHeart}></Icon>
            <Photo size="small" />
           </footer>
    )
};

export default Navigation;
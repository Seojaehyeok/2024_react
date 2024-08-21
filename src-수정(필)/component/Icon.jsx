const Icon = (props) => {
    const {IconComponent} = props;

    return(
        <div style={{width: "75px", height: "50px"}} className="flex justify-center items-center"><IconComponent className="w-6 h-6" /></div>
    )
};

export default Icon;
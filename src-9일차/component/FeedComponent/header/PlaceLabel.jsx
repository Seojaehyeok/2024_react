const PlaceLabel = (props) => {
    return(
        <span className="text-xs">{props.city || "Incheon"}, {props.nation || "Korea"}</span>
    );
};

export default PlaceLabel;
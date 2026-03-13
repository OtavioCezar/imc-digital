function Title(props) {
    return (
        <h1 className={`text-${props.size} font-bold ${props.color} ${props.row === true ? "flex gap-3" : ""}`}>
            {props.children}
        </h1>
    )
}

export default Title
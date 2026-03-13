function Button(props) {
    return (
        <button className="flex-1 flex items-center justify-center gap-2 bg-[#C4873D] hover:bg-[#D4944C] text-white font-semibold rounded-full py-3 transition">
            {props.children}
        </button>
    )
}

export default Button
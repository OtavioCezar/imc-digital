function Card(props) {
    return (
        <main className="flex bg-[#1B1C22] border border-gray-700 rounded-2xl shadow-2xl shadow-[#FA8938]/9 overflow-hidden max-w-4xl w-full">
            {props.children}
        </main>
    )
}

export default Card
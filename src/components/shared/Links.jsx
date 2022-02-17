export default function Links(props) {
    return (
        <div className="bg-white w-full p-3 text-red-900 text-sm font-bold hover:bg-black hover:text-white hover:cursor-pointer">
            <a href={`${props.link}`} className="px-8">{props.name}</a>
        </div>
    )
}
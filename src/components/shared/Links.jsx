export default function Links(props) {
    return (
        <div className="bg-white w-full p-3 text-red-900 text-sm font-bold pt-3 px-4">
            <a href={`${props.link}`} className="px-8">{props.name}</a>
        </div>
    )
}
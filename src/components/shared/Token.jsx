export default function Token(props) {
    return (
        <div className="mt-2">
            <label htmlFor="#" className="text-gray-300 text-lg font-bold">{props.label}</label>
            <div className="mt-3 flex items-center justify-center w-full">
                <input className="shadow appearance-none h-12 text-xs border bg-red-900
                        placeholder-gray-300 rounded w-full px-4 text-gray-200 leading-tight focus:outline-none
                        focus:shadow-outline" id="username" type="text" placeholder={`${props.holder}`} />
            </div >


        </div>
    )
}
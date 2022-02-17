export default function Button() {
    return (
        <div className="mt-12  bg-white w-[160px] h-12 rounded-xl flex items-center justify-center">
            <button type="submit">
                <label htmlFor="#" className="font-bold text-red-900 text-sm" >
                    <a href="dashboard">Buy</a></label>
            </button>
        </div>
    )
}
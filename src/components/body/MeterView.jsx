import Navbar from "../shared/Navbar";

export default function MeterView() {
    return (
            <div className="bg-red-900 w-full h-screen grid grid-cols-8">
                <div className="col-span-2">
                </div>
                <div className="col-span-4 border m-20">
                <Navbar />
                <div className=" p-16 rounded-xl mt-2">
                        <label htmlFor="#" className="text-gray-300 text-lg font-bold">Meter Number</label>
                        <div className="mt-3 flex items-center justify-center w-full">
                            <input className="shadow appearance-none h-12 text-xs border bg-red-900
                        placeholder-gray-300 rounded w-full px-4 text-gray-200 leading-tight focus:outline-none
                        focus:shadow-outline" id="username" type="text" placeholder="Enter your meter number" />
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="mt-12  bg-white w-[160px] h-12 rounded-xl flex items-center justify-center">
                            <button type="submit">
                                <label htmlFor="#" className="font-bold text-red-900 text-sm" >
                                    <a href="dashboard">View Days</a></label>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
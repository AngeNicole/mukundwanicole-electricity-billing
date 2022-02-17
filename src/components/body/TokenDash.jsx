import Navbar from "../shared/Navbar"

export default function TokenDash() {
    return (
        <div className="bg-red-900 w-full h-screen grid grid-cols-8">
            <div className="col-span-2">
            </div>
            <div className="col-span-4 border p-3 m-20">
                <Navbar />
                <div className=" p-16 rounded-xl">
                    
                </div>
            </div>
        </div>
    )
}
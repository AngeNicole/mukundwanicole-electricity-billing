import Navbar from "../shared/Navbar"
import Token from "../shared/Token"

export default function TokenDash() {

    const usertokens = [
        {
            id: 1,
            meter: 28932455,
            amount: 40000,
            status: 1
        },
        {
            id: 2,
            meter: 43748328,
            amount: 43000,
            status: 0
        },
        {
            id: 3,
            meter: 4873942,
            amount: 90000,
            status: 0
        }
    ]

    return (
        <div className="bg-red-900 w-full h-screen grid grid-cols-8">
            <div className="col-span-2">
            </div>
            <div className="col-span-4 border p-3 m-20">
                <Navbar />
                <div className=" p-16 rounded-xl">
                    {
                        usertokens.map((item, i) => {
                            return (
                                <Token
                                id={item.id}
                                meter = { item.meter }
                                amount={item.amount}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
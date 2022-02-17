import Button from "../components/cards/Button";
import Token from "../components/ReceiveTokens.jsx/Token";
import Navbar from "../components/shared/Navbar";

let usertokens = [
    {
        id: 1,
        meter: 28932455,
        amount: 40000
    },
    {
        id: 2,
        meter: 43748328,
        amount: 43000
    }
]

export default function Home() {
    return (
        <div className="bg-red-900 w-full h-screen grid grid-cols-8">
            <div className="col-span-2">
            </div>
            <div className="col-span-4 border p-3 m-20">
                <Navbar />
                <div className=" p-16 rounded-xl">
                    <Token
                        label="Meter Number"
                        holder="23398420"
                    />
                    <Token
                        label="Amount"
                        holder="enter the amount of money"
                    />

                    <div className="flex items-center justify-center">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}
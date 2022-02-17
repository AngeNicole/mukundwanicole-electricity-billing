import Button from "../components/shared/Button";
import Token from "../components/shared/Token";
import Navbar from "../components/shared/Navbar";

export default function Home() {
    return (
        <div className="bg-red-900 w-full h-screen grid grid-cols-8">
            <div className="col-span-2">
            </div>
            <div className="col-span-4 border m-20">
                <Navbar />
                <div className=" px-16 py-12 rounded-xl">
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
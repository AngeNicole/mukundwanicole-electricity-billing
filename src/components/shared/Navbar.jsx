import Links from "./Links"

export default function Navbar() {
    return (
        <div>
            <div className="flex items-center justify-center">
                <Links
                    link="/"
                    name="Home"
                />
                <Links
                    link="dashboard"
                    name="Dashboard"
                />
                <Links
                    link="meter"
                    name="Meter Number"
                />
            </div>
            <div className="text-white font-bold text-xl flex items-center justify-center pt-16 pb-4">
                <h2>Electricty Token Buying</h2>
            </div>
        </div>
            )
    
}
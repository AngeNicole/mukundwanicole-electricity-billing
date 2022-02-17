export default function ProductCard(props) {
    return (
        <div className="flex gap-5 items-center my-5">
            <div className="border rounded-sm h-28 w-1/6 p-4">
                <img className="w-full h-20 object-cover" src={props.image} alt="" />
            </div>
            <div className="w-4/6">
                <div className="w-full">
                    <h1 className="font-bold text-lg my-1 capitalize">{ props.title}</h1>
                    <p className="text-gray-500 font-bold uppercase text-xs mb-3">{props.description}</p>
                    <hr />
                    <div className="grid grid-cols-2 mt-2">
                        <div className="flex items-center">
                            <div className="flex items-center gap-2 border-r-2 pr-2">
                                <span className="text-sm text-gray-500">Quantity: </span>
                                <span className="font-bold text-sm">{props.quantity}</span>
                            </div>
                            <span className="text-red-500 font-bold text-sm ml-2">Remove</span>
                        </div>
                        <div className="flex justify-end">
                            <span className="font-bold text-lg">{props.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
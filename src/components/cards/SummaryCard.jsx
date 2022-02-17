export default function SummaryCard(props) {
    return (
        <div class="border rounded p-5 mb-5">
            <h1 class="text-lg font-bold mb-5">Order Summary</h1>
            <div>
                <div class="flex justify-between text-sm my-2">
                    <h2 class="font-bold">Subtotal</h2>
                    <span class="text-gray-500">500.12</span>
                </div>
                <hr />
                <div class="flex justify-between text-sm my-2">
                    <h2 class="font-bold">Subtotal</h2>
                    <span class="text-gray-500">500.12</span>
                </div>
                <hr />
                <div class="flex justify-between text-sm my-2">
                    <h2 class="font-bold">Subtotal</h2>
                    <span class="text-gray-500">500.12</span>
                </div>
                <hr />
                <div class="flex justify-between text-sm my-2">
                    <h2 class="font-bold">Order Total</h2>
                    <span class="text-gray-500">500.12</span>
                </div>
                <hr />
                <button class="w-full text-white bg-red-600 rounded-full p-3 mt-5">Checkout</button>
            </div>
        </div>
    )
}
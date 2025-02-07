export default function Footer(){
    return (
        <footer className="bg-gray-600 text-white py-6">

            <div className="container mx-auto flex justify-between items-center">
                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
                    <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
                </div>

                {/* Accepted Payment Methods */}
                <div className="flex-grow flex justify-center">
                    <div className="text-center">
                        <h2 className="text-lg font-bold">Accepted Payment Methods</h2>
                        <ul className="flex justify-center space-x-4 mt-2">
                            <li>
                                <img src="/payment/visa.webp" alt="Visa" className="h-8" />
                            </li>
                            <li>
                                <img src="/payment/mastercard.png" alt="MasterCard" className="h-8" />
                            </li>
                            <li>
                                <img src="/payment/paypal.png" alt="PayPal" className="h-8" />
                            </li>
                            <li>
                                <img src="/payment/venmo.png" alt="Venmo" className="h-8" />
                            </li>
                            <li>
                                <img src="/payment/square.png" alt="Square" className="h-8" />
                            </li>
                            {/* Add more payment method icons as needed */}
                        </ul>
                    </div>
                </div>

                {/* Powered By */}
                <div className="flex items-center">
                    <label className="text-sm font-semibold">Powered by:&nbsp;&nbsp;</label>
                    <img src="/vite.svg" alt="Vite" className="h-8" title="Vite" />
                </div>
            </div>
        </footer>
    );
};

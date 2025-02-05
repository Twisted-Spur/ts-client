export default function Footer(){
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Accepted Payment Methods */}
                <div>
                    <h2 className="text-lg font-bold">Accepted Payment Methods</h2>
                    <ul className="flex space-x-4 mt-2">
                        <li>
                            <img src="/images/payment-visa.png" alt="Visa" className="h-8" />
                        </li>
                        <li>
                            <img src="/images/payment-mastercard.png" alt="MasterCard" className="h-8" />
                        </li>
                        <li>
                            <img src="/images/payment-paypal.png" alt="PayPal" className="h-8" />
                        </li>
                        <li>
                            <img src="/images/payment-venmo.png" alt="Venmo" className="h-8" />
                        </li>
                        <li>
                            <img src="/images/payment-square.png" alt="Square" className="h-8" />
                        </li>
                        <li>
                            <img src="/images/payment-cashapp.png" alt="CashApp" className="h-8" />
                        </li>
                        {/* Add more payment method icons as needed */}
                    </ul>
                </div>
            </div>

            <div className="container mx-auto mt-4 flex flex-col md:flex-row justify-between items-center">
                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
                    <a href="https://x.com" className="hover:text-gray-400">X</a>
                    <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
                </div>

                {/* Powered By */}
                <div className="text-center md:text-right mt-4 md:mt-0">
                    <p className="text-sm">Powered by: Vite, React, and Tailwind CSS</p>
                </div>
            </div>
        </footer>
    );
};

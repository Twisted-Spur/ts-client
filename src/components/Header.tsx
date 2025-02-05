import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/twisted-spur-logo.png" alt="N/A" className="h-8 w-8 mr-2" />
                    <Link to="/" className="text-l font-bold">Twisted Spur</Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/" className="hover:text-gray-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/aboutUs" className="hover:text-gray-400">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contactUs" className="hover:text-gray-400">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/sign-in" className="hover:text-gray-400">Sign In</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

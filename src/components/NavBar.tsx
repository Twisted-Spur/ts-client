import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className="bg-amber-700 text-white py-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link to="/shop" className="hover:text-gray-400">Custom Shirts</Link>
                    <Link to="/customize" className="hover:text-gray-400">Custom Hats</Link>
                    <Link to="/about" className="hover:text-gray-400">Custom Drinkware</Link>
                </div>
            </div>
        </nav>
    );
};

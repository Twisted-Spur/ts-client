import axios from 'axios';
import {useQuery} from "react-query";

const fetchCategories = async () => {
    const response = await axios.get('http://localhost:8080/inventoryService/categories');
    console.log("yo, here you are " + response.data);
    return response.data;
}

export default function NavBar() {
    const { data } = useQuery('categories', fetchCategories);

    return (
        <nav className="bg-amber-700 text-white py-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <ul className="flex items-center space-x-2">
                        {data.categories.map((category) => (
                            <li key={category.category} />
                        ))}
                    </ul>
                    {/*<Link to="/shop" className="hover:text-gray-400">Custom Shirts</Link>*/}
                    {/*<Link to="/customize" className="hover:text-gray-400">Custom Hats</Link>*/}
                    {/*<Link to="/about" className="hover:text-gray-400">Custom Drinkware</Link>*/}
                </div>
            </div>
        </nav>
    );
};

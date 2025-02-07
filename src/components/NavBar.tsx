import axios from 'axios';
import {useQuery} from "react-query";
import {CategoryDto} from "../dtos/CategoryDto.ts";
import { Link } from 'react-router-dom';
import inventoryApiConfig from "../configs/inventoryApiConfig.ts";

const fetchCategories = async () => {
    const response = await axios.get(inventoryApiConfig.baseUrl + inventoryApiConfig.endpoints.categories);
    return response.data;
}

export default function NavBar() {
    const { data, error, isLoading, isError } = useQuery('categories', fetchCategories);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error: {(error as Error).message}</span>;
    }

    if (!data) {
        return null; // or handle the case where data is undefined
    }

    return (
        <nav className="bg-teal-500 text-white py-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <ul className="flex items-center space-x-2">
                        {
                            data.map((categoryDto: CategoryDto) => (
                            <li key={categoryDto.category}>
                                <Link to={`/category/${categoryDto.category.replace(/\s+/g, '-').toLowerCase()}`}>
                                    {categoryDto.category}
                                </Link>
                            </li>
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

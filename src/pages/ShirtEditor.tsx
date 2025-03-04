import { useState } from 'react';
import ShirtConfiguration from "../components/ShirtConfiguration.tsx";
import axios from "axios";
import inventoryApiConfig from "../configs/inventoryApiConfig.ts";
import {CategoryDto} from "../dtos/CategoryDto.ts";
import {ProductDto} from "../dtos/ProductDto.ts";
import {useQuery} from "react-query";

const fetchProducts = async () => {
    try {
        // first fetch the categories to get the cat id for Custom Shirts
        const categoriesResp = await axios.get(inventoryApiConfig.baseUrl + inventoryApiConfig.endpoints.categories);
        const categories: CategoryDto[] = categoriesResp.data.map((cat: CategoryDto)=> ({
            id: cat.id,
            category: cat.category,
            createdAt: cat.createdAt,
            updatedAt: cat.updatedAt
        }));

        const cat: CategoryDto = categories.find((catDto) => catDto.category == "Custom Shirts" );

        // get all the products tied to this cat (Custom Shirts)
        const productsByCatIdResp = await axios.get(inventoryApiConfig.baseUrl + inventoryApiConfig.endpoints.products + "/" + cat.id);
        const products: ProductDto[] = productsByCatIdResp.data.map((product: ProductDto)=> ({
            id: product.id,
            catId: product.catId,
            name: product.name,
            summary: product.summary,
            description: product.description,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
        }))
        console.log(products);
        return products;
    } catch (error) {
        console.error('Error fetching products for this category: ', error);
    }
}

export default function ShirtEditor() {
    const { data, error, isLoading, isError } = useQuery('products', fetchProducts);
    const [ selectedProduct, setSelectedProduct ] = useState();
    // const [shirtType, setShirtType] = useState('T-Shirt');
    // const [shirtSize, setShirtSize] = useState('M');
    // const [color, setColor] = useState('#ffffff');
    // const [prints, setPrints] = useState<PrintDto[]>([]);
    // const [shirtBrand, setShirtBrand] = useState('Generic');
    // const [quantity, setQuantity] = useState(1);
    // const [unitPrice, setUnitPrice] = useState(20);

    // const totalPrice = unitPrice * quantity;

    // const addPrint = (print: PrintDto) => {
    //     setPrints([...prints, print]);
    // };
    //
    // const removePrint = (printId: string) => {
    //     setPrints(prints.filter((p) => p.id !== printId));
    // };

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/2">
                {/*<ShirtPreviewer color={color} prints={prints} />*/}
            </div>
            <div className="lg:w-1/2">
                <ShirtConfiguration
                    products={data}
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProduct}
                    // shirtType={shirtType}
                    // setShirtType={setShirtType}
                    // shirtSize={shirtSize}
                    // setShirtSize={setShirtSize}
                    // color={color}
                    // setColor={setColor}
                    // prints={prints}
                    // addPrint={addPrint}
                    // removePrint={removePrint}
                    // shirtBrand={shirtBrand}
                    // setShirtBrand={setShirtBrand}
                    // quantity={quantity}
                    // setQuantity={setQuantity}
                    // unitPrice={unitPrice}
                    // setUnitPrice={setUnitPrice}
                    // totalPrice={totalPrice}
                />
            </div>
        </div>
    );
};
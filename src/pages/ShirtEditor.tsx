import {useEffect, useState} from 'react';
import ShirtConfiguration from "../components/ShirtConfiguration.tsx";
import axios from "axios";
import inventoryApiConfig from "../configs/inventoryApiConfig.ts";
import {CategoryDto} from "../dtos/CategoryDto.ts";
import {ProductDto} from "../dtos/ProductDto.ts";
import {useQuery} from "react-query";
import {SupplierDto} from "../dtos/SupplierDto.ts";

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
        return products;
    } catch (error) {
        console.error('Error fetching products for this category: ', error);
    }
}

const fetchSuppliers = async () => {
    try {
        const supplier: SupplierDto = {
            id: 1,
            supplierName: "Comfort Colors",
            createdAt: "",
            updatedAt: "",
        }
        const suppliers: SupplierDto[] = [];
        suppliers.push(supplier);
        return suppliers;
    } catch (error) {
        console.error('Error fetching suppliers for this category: ', error);
    }
}

export default function ShirtEditor() {
    const { data: products, error: products_error, isLoading: products_isLoading, isError: products_isError } = useQuery('products', fetchProducts);
    const [ selectedProductId, setSelectedProductId ] = useState(1);

    const { data: shirtSuppliers, error: shirtSuppliers_error, isLoading: shirtSuppliers_isLoading, isError: shirtSuppliers_isError } = useQuery('shirtSuppliers', fetchSuppliers);
    const [shirtSupplierId, setShirtSupplierId] = useState(1);

    const [quantity, setQuantity] = useState(1);
    const [unitPrice, setUnitPrice] = useState(20);

    const totalPrice = unitPrice * quantity;

    // const [shirtSize, setShirtSize] = useState('M');
    // const [color, setColor] = useState('#ffffff');
    // const [prints, setPrints] = useState<PrintDto[]>([]);

    // const addPrint = (print: PrintDto) => {
    //     setPrints([...prints, print]);
    // };
    //
    // const removePrint = (printId: string) => {
    //     setPrints(prints.filter((p) => p.id !== printId));
    // };

    // TODO - when this changes, we need to inform the previewer to update the shirt image
    useEffect(() => {
        console.log("Selected product ID: "  + selectedProductId);
    }, [selectedProductId]);

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-1/2">
                {/*<ShirtPreviewer color={color} prints={prints} />*/}
            </div>
            <div className="lg:w-1/2">
                <ShirtConfiguration
                    products={products}
                    productsIsLoading={products_isLoading}
                    selectedProductId={selectedProductId}
                    setSelectedProductId={setSelectedProductId}

                    shirtSuppliers={shirtSuppliers}
                    suppliersIsLoading={shirtSuppliers_isLoading}
                    selectedShirtSupplierId={shirtSupplierId}
                    setSelectedShirtSupplierId={setShirtSupplierId}

                    quantity={quantity}
                    setQuantity={setQuantity}
                    unitPrice={unitPrice}
                    setUnitPrice={setUnitPrice}
                    totalPrice={totalPrice}

                    // shirtType={shirtType}
                    // setShirtType={setShirtType}
                    // shirtSize={shirtSize}
                    // setShirtSize={setShirtSize}
                    // color={color}
                    // setColor={setColor}
                    // prints={prints}
                    // addPrint={addPrint}
                    // removePrint={removePrint}
                />
            </div>
        </div>
    );
};
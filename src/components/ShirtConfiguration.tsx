import {ProductDto} from "../dtos/ProductDto.ts";
import PropTypes from "prop-types";

// interface ShirtSelectionsProps {
//     products: ProductDto[];
//     selectedProduct: ProductDto;
//     setSelectedProduct: (product: ProductDto) => void;
    // shirtType: string;
    // setShirtType: (type: string) => void;
    // shirtSize: string;
    // setShirtSize: (size: string) => void;
    // color: string;
    // setColor: (color: string) => void;
    // prints: Print[];
    // addPrint: (print: Print) => void;
    // removePrint: (printId: string) => void;
    // shirtBrand: string;
    // setShirtBrand: (brand: string) => void;
    // quantity: number;
    // setQuantity: (quantity: number) => void;
    // unitPrice: number;
    // setUnitPrice: (price: number) => void;
    // totalPrice: number;
// }

export default function ShirtConfiguration({
    products,
    selectedProduct,
    setSelectedProduct
                                             // shirtType,
                                             // setShirtType,
                                             // shirtSize,
                                             // setShirtSize,
                                             // color,
                                             // setColor,
                                             // prints,
                                             // addPrint,
                                             // removePrint,
                                             // shirtBrand,
                                             // setShirtBrand,
                                             // quantity,
                                             // setQuantity,
                                             // unitPrice,
                                             // setUnitPrice,
                                             // totalPrice,
                                         }) {
    // const { products } = useQuery('products', fetchProducts);
    // const [shirtType, setShirtType] = useState(shirtType);
    // const [shirtSize, setShirtSize] = useState(shirtSize);
    // const [shirtBrand, setShirtBrand] = useState(shirtBrand);
    // const [shirtColor, setShirtColor] = useState(shirtColor);
    // const [quantity, setQuantity] = useState(0);
    // const [unitPrice, setUnitPrice] = useState(0);
    // const [totalPrice, setTotalPrice] = useState(0);
    // const [prints, setPrints] = useState<Print[]>([]);

    // const handleAddPrint = () => {
    //     if (printName && printLocation) {
    //         const newPrint: Print = {
    //             id: Date.now().toString(),
    //             name: printName,
    //             location: printLocation, // e.g. "top-10 left-10"
    //         };
    //         addPrint(newPrint);
    //         setPrintName('');
    //         setPrintLocation('');
    //     }
    // };

    return (
        <div className="space-y-6 p-4 bg-white rounded shadow">
            {/* Shirt Type */}
            <div>
                <label className="block text-sm font-medium">Shirt Type</label>
                <select
                    value={selectedProduct}
                    onChange={(e) => (setSelectedProduct(e.target.value))}
                    className="mt-1 block w-full border-gray-600 rounded-md shadow-sm"
                >
                    {/*<option value="T-Shirt">T-Shirt</option>*/}
                    {/*<option value="Polo">Polo</option>*/}
                    {/*<option value="Hoodie">Hoodie</option>*/}
                    {products.map((product: ProductDto) => (
                        <option key={product.id} value={product.id}>
                            {product.name}
                        </option>
                    ))}
                </select>
            </div>

        {/*    /!* Shirt Size *!/*/}
        {/*    <div>*/}
        {/*        <label className="block text-sm font-medium">Shirt Size</label>*/}
        {/*        <select*/}
        {/*            value={shirtSize}*/}
        {/*            onChange={(e) => setShirtSize(e.target.value)}*/}
        {/*            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"*/}
        {/*        >*/}
        {/*            <option value="S">S</option>*/}
        {/*            <option value="M">M</option>*/}
        {/*            <option value="L">L</option>*/}
        {/*            <option value="XL">XL</option>*/}
        {/*        </select>*/}
        {/*    </div>*/}

        {/*    /!* Color Picker *!/*/}
        {/*    <div>*/}
        {/*        <label className="block text-sm font-medium">Color Picker</label>*/}
        {/*        <input*/}
        {/*            type="color"*/}
        {/*            value={color}*/}
        {/*            onChange={(e) => setColor(e.target.value)}*/}
        {/*            className="mt-1"*/}
        {/*        />*/}
        {/*    </div>*/}

        {/*    /!* Prints *!/*/}
        {/*    <div className="border p-2 rounded">*/}
        {/*        <label className="block text-sm font-medium mb-2">Prints</label>*/}
        {/*        <div className="space-y-2">*/}
        {/*            {prints.map((print) => (*/}
        {/*                <div*/}
        {/*                    key={print.id}*/}
        {/*                    className="flex items-center justify-between bg-gray-100 p-2 rounded"*/}
        {/*                >*/}
        {/*                    <div>*/}
        {/*                        <span className="font-bold">{print.name}</span> at{' '}*/}
        {/*                        <span className="italic">{print.location}</span>*/}
        {/*                    </div>*/}
        {/*                    <button*/}
        {/*                        onClick={() => removePrint(print.id)}*/}
        {/*                        className="text-red-500 text-sm"*/}
        {/*                    >*/}
        {/*                        Remove*/}
        {/*                    </button>*/}
        {/*                </div>*/}
        {/*            ))}*/}
        {/*        </div>*/}
        {/*        <div className="mt-2 space-y-2">*/}
        {/*            <input*/}
        {/*                type="text"*/}
        {/*                placeholder="Print Name"*/}
        {/*                value={printName}*/}
        {/*                onChange={(e) => setPrintName(e.target.value)}*/}
        {/*                className="w-full border-gray-300 rounded-md shadow-sm p-1"*/}
        {/*            />*/}
        {/*            <input*/}
        {/*                type="text"*/}
        {/*                placeholder="Print Location (e.g., top-10 left-10)"*/}
        {/*                value={printLocation}*/}
        {/*                onChange={(e) => setPrintLocation(e.target.value)}*/}
        {/*                className="w-full border-gray-300 rounded-md shadow-sm p-1"*/}
        {/*            />*/}
        {/*            <button*/}
        {/*                onClick={handleAddPrint}*/}
        {/*                className="w-full bg-blue-500 text-white py-1 rounded"*/}
        {/*            >*/}
        {/*                Add Print*/}
        {/*            </button>*/}
        {/*        </div>*/}
        {/*    </div>*/}

        {/*    /!* Shirt Brand *!/*/}
        {/*    <div>*/}
        {/*        <label className="block text-sm font-medium">Shirt Brand</label>*/}
        {/*        <input*/}
        {/*            type="text"*/}
        {/*            value={shirtBrand}*/}
        {/*            onChange={(e) => setShirtBrand(e.target.value)}*/}
        {/*            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"*/}
        {/*        />*/}
        {/*    </div>*/}

        {/*    /!* Quantity *!/*/}
        {/*    <div>*/}
        {/*        <label className="block text-sm font-medium">Quantity</label>*/}
        {/*        <input*/}
        {/*            type="number"*/}
        {/*            min="1"*/}
        {/*            value={quantity}*/}
        {/*            onChange={(e) => setQuantity(parseInt(e.target.value))}*/}
        {/*            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"*/}
        {/*        />*/}
        {/*    </div>*/}

        {/*    /!* Pricing *!/*/}
        {/*    <div>*/}
        {/*        <label className="block text-sm font-medium">Price per Shirt ($)</label>*/}
        {/*        <input*/}
        {/*            type="number"*/}
        {/*            min="0"*/}
        {/*            value={unitPrice}*/}
        {/*            onChange={(e) => setUnitPrice(parseFloat(e.target.value))}*/}
        {/*            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <p className="text-lg font-bold">*/}
        {/*            Total Price: ${totalPrice.toFixed(2)}*/}
        {/*        </p>*/}
        {/*    </div>*/}
        </div>
    );
};

ShirtConfiguration.propTypes = {
    products: PropTypes.array
}
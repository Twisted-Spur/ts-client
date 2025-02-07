import apiConfig from "./apiConfig.ts";

const inventoryApiConfig = {
    baseUrl: apiConfig.baseUrl + apiConfig.inventoryApiConfigPort + apiConfig.inventoryApiConfigRoot,
    endpoints: {
        categories: "/categories",
    }
}

export default inventoryApiConfig;

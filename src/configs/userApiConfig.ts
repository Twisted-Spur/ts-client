import apiConfig from "./apiConfig.ts";

const userApiConfig = {
    baseUrl: apiConfig.baseUrl + apiConfig.userApiConfigPort + apiConfig.userApiConfigRoot,
    endpoints: {
        signin: "/user/login",
        // TODO - signout does not yet exist on backend
        signout: "/user/logout/{id}",

        postUser: "/user",
        getUser: "/user/{id}",
        getUsers: "/user",
        putUser: "/user/{id}",
        deleteUser: "/user/{id}"
    }
}

export default userApiConfig;

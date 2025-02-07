import axios from "axios";
import {UserDTO} from "../dtos/UserDTO.ts";
import userApiConfig from "../configs/userApiConfig.ts";

const signup = async (userDTO: UserDTO): Promise<void> => {
    try {
        await axios.post(`${userApiConfig.baseUrl}${userApiConfig.endpoints.postUser}`, userDTO, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        throw new Error("Failed to sign up");
    }
};

export default {
    signup,
};
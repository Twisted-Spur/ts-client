import axios from "axios";
import {UserDto} from "../dtos/UserDto.ts";
import userApiConfig from "../configs/userApiConfig.ts";
import {SignInDto} from "../dtos/SignInDto.ts";

const signup = async (userDTO: UserDto): Promise<void> => {
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

const signin = async (signInDto: SignInDto): Promise<void> => {
    try {
        await axios.post(`${userApiConfig.baseUrl}${userApiConfig.endpoints.signin}`, signInDto, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        throw new Error("Failed to sign in");
    }
};

export default {
    signup,
    signin
};
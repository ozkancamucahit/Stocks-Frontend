import axios from "axios"
import { handleError } from "../Helpers/ErrorHandler";
import { UserProfileToken } from "../Models/User";

const api = process.env.REACT_APP_API_URL_HTTPS?.concat('account/') ?? '';

export const loginAPI = async (username:string, password: string) => {
    try {
                const data = await axios.post<UserProfileToken>(api + "login", {
            username: username,
            password: password
        });

        return data;
        
    } catch (error) {
        handleError(error)
    }
}
export const RegisterAPI = async (email: String, username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "register", {
            username: username,
            email: email,
            password: password
        });

        return data;
        
    } catch (error) {
        handleError(error)
    }
}

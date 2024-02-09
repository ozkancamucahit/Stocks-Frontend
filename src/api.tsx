import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query : string) => {

    try {
        const url  = `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`;
        const data = await axios.get<SearchResponse>(url);
        return data;
    } catch (error) {

        if(axios.isAxiosError(error)){
            console.log('error AXIOS :>> ', error.message);
            return error.message;
        }
        else{
            console.log('error API CALL:>> ', error);
            return "unexpected error";
        }
        
    }


}



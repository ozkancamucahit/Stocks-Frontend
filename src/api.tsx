import axios from "axios";
import { CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company";

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

export const getCompanyProfile = async (query : string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );

        return data;
    } catch (error : any) {
        console.log('error API CALL getCompanyProfile:>> ', error.message);
    }
}

export const getKeyMetrics = async (query : string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
        );

        return data;
    } catch (error : any) {
        console.log('error API CALL getCompanyProfile:>> ', error.message);
    }
}

export const getIncomeStatement = async (query : string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
        );

        return data;
    } catch (error : any) {
        console.log('error API CALL getCompanyProfile:>> ', error.message);
    }
}











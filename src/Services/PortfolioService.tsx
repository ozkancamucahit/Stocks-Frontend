

import axios from "axios";
import { handleError } from "../Helpers/ErrorHandler";
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio";


const api = process.env.REACT_APP_API_URL_HTTPS?.concat('Portfolio/') ?? "";

export const portfolioAddAPI = async (symbol :string) => {
    try {
      const data = await axios.post<PortfolioPost>(api.concat('AddPortfolio/', symbol));
      return data;
    } catch (error) {
        handleError(error);
    }
}
export const portfolioDeleteAPI = async (symbol :string) => {
    try {
      const data = await axios.delete<PortfolioPost>(api.concat('DeletePortfolio/', symbol));
      return data;
    } catch (error) {
        handleError(error);
    }
}

export const portfolioGetAPI = async () => {
    try {
      const data = await axios.get<PortfolioGet[]>(api.concat('UserPortfolio'));
      return data;
    } catch (error) {
        handleError(error);
    }
}






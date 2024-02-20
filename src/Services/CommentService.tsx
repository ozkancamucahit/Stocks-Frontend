import axios from "axios";
import { CommentPost } from "../Models/CommentPost";
import { handleError } from "../Helpers/ErrorHandler";


const api = process.env.REACT_APP_API_URL_HTTPS?.concat('comment/create/') ?? "";

export const commentPostAPI = async (
    title :string, content :string, symbol: string) => {

      try {
        const data = await axios.post<CommentPost>(api + symbol, {
          title :title,
          content : content
        });
        
        return data;
      } catch (error) {
        handleError(error);
      }



}



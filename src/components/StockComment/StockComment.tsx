
import React from 'react'
import StockCommentForm, { CommentInputForms } from './StockCommentForm/StockCommentForm';
import { commentPostAPI } from '../../Services/CommentService';
import { toast } from 'react-toastify';

interface Props  {
    stockSymbol: string;
}

const StockComment = ({stockSymbol}: Props) => {

  const handleComment = (e :CommentInputForms) => {

    commentPostAPI(e.title, e.content, stockSymbol)
    .then((res) => {
      if (res){
        toast.success("Comment created succesfully");
        console.log("SUCCESS");
      }
    })
    .catch((e) => {
      toast.warning(e);
      console.log("FAIL");
    })
  };

  return (
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
  )
}

export default StockComment
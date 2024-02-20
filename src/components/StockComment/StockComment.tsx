
import React, { useEffect, useState } from 'react'
import StockCommentForm, { CommentInputForms } from './StockCommentForm/StockCommentForm';
import { commentGetAPI, commentPostAPI } from '../../Services/CommentService';
import { toast } from 'react-toastify';
import { CommentGet } from '../../Models/Comment';
import Spinner from '../Spinner/Spinner';
import StockCommentList from '../StockCommentList/StockCommentList';

interface Props  {
    stockSymbol: string;
}

const StockComment = ({stockSymbol}: Props) => {

  const [comments, setComments] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getComments()
  }, [])
  

  const handleComment = (e :CommentInputForms) => {

    commentPostAPI(e.title, e.content, stockSymbol)
    .then((res) => {
      if (res){
        toast.success("Comment created succesfully");
        console.log("SUCCESS");
        getComments();
        
      }
    })
    .catch((e) => {
      toast.warning(e);
      console.log("FAIL");
    })
  };

  const getComments = async () => {
    setLoading(true);
    commentGetAPI(stockSymbol)
    .then((res) => {
      setLoading(false);
      setComments(res?.data!);
    })
    .catch((e) => {
      toast.warning(e);
      console.log("FAIL");
    })


  }

  return (
    <div className="flex flex-col">
      {loading ? <Spinner /> : <StockCommentList comments={comments!}/>}
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />

    </div>
  )
}

export default StockComment
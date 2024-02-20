
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import ListPortfolio from '../../components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../components/CardList/CardList';
import { PortfolioGet } from '../../Models/Portfolio';
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from '../../Services/PortfolioService';
import { handleError } from '../../Helpers/ErrorHandler';
import { toast } from 'react-toastify';

interface Props {


}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [SearchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [ServerError, setServerError] = useState<string>("");
  const [portfolioValues, setportfolioValues] = useState<PortfolioGet[] | null>([]);


  useEffect(() => {
    getPortfolio()
  
  }, []);
  


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log("btn e :>> ", e);
  };

  const getPortfolio = () => {
    portfolioGetAPI()
    .then((res) => {
      if(res?.data){
        setportfolioValues(res?.data);
      }
    })
    .catch((e)=> handleError(e) /*toast.warning('Could not get portfolio values')*/)

  }

  const onSearchSubmit = async (
    e: SyntheticEvent 
  ) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result);
    }
    else if (Array.isArray(result.data)){
      setSearchResult(result.data);
    }

    console.log('searchResult :>> ', SearchResult); 
  };

  const onPortfolioCreate = (e : any) => {
    e.preventDefault();
    const val :string = e.target[0].value;
    portfolioAddAPI(val)
    .then((res) => {
      if(res?.status === 201){ // created
        toast.success(`${val} added to portfolio`)
        getPortfolio()
      }
    })
    .catch((e) => {
      toast.warning('Could not add to portfolio')

    })

  };

  const onPortfolioDelete = (e : any) => {
    e.preventDefault();
    const val :string = e.target[0].value;

    portfolioDeleteAPI(val)
    .then((res) => {
      if(res?.status === 204){ // no content
        toast.success(`${val} removed from portfolio`)
        getPortfolio()
      }
    })
    .catch((e) => {
      toast.warning('Could not delete portfolio')

    })
  }

  return (
    <div className="App">
      <Search search={search} handleSearchChange={handleSearchChange} onSearchSubmit={onSearchSubmit} />
      <ListPortfolio portfolioValues= {portfolioValues!} onPortfolioDelete={onPortfolioDelete}/>
      <CardList searchResults={SearchResult} onPortfolioCreate={onPortfolioCreate} showNoResults={search.length > 0}/>
      {ServerError && <h1>{ServerError}</h1>}
    </div>
  )
}

export default SearchPage



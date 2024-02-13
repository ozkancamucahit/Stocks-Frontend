
import React, { useEffect, useState } from 'react'
import { CompanyCompData } from '../../company';
import { getCompData } from '../../api';
import CompFinderItem from './CompFinderItem/CompFinderItem';

interface Props {
    ticker : string;

}

const CompFinder = ({ticker}: Props) => {
    const [CompanyData, setCompanyData] = useState<CompanyCompData>();

    useEffect(() => {
      const getComps = async () => {
        const value = await getCompData(ticker);
        setCompanyData(value?.data[0]);
      }
    getComps();

    }, [ticker])
    
    
    
  return (
    <div className='inline-flex rounded-md shadow-sm m-4'>
        {CompanyData?.peersList.map( (ticker) => {
            return <CompFinderItem ticker={ticker} />;
        })}
    </div>
  )
}

export default CompFinder




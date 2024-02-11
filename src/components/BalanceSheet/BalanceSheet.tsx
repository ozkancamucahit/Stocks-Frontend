
import React, { useEffect, useState } from 'react'
import { CompanyBalanceSheet } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getBalanceSheet } from '../../api';
import RatioList from '../RatioList/RatioList';

type Props = {}

const config = [
    {
      label: "Cash",
      render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
    },
    {
      label: "Inventory",
      render: (company: CompanyBalanceSheet) => company.inventory,
    },
    {
      label: "Other Current Assets",
      render: (company: CompanyBalanceSheet) => company.otherCurrentAssets,
    },
    {
      label: "Minority Interest",
      render: (company: CompanyBalanceSheet) => company.minorityInterest,
    },
    {
      label: "Other Non-Current Assets",
      render: (company: CompanyBalanceSheet) => company.otherNonCurrentAssets,
    },
    {
      label: "Long Term Debt",
      render: (company: CompanyBalanceSheet) => company.longTermDebt,
    },
    {
      label: "Total Debt",
      render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
    },
  ];



const BalanceSheet = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [BalanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();

    useEffect(() => {
      const getData = async () => {
        const value = await getBalanceSheet(ticker);
        setBalanceSheet(value?.data[0]);
      }
      getData();
    }, [])
    


  return (
    <>
        {BalanceSheet ? (
        <>
            <RatioList config={config} data={BalanceSheet}/>
        </>): (<><h1>Company not found</h1></>)}
    </>
  )
}

export default BalanceSheet

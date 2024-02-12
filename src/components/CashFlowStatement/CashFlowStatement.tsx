

import React, { useEffect, useState } from 'react'
import { CompanyCashFlow } from '../../company';
import { useOutletContext } from 'react-router-dom';
import { getCashFlowStatement } from '../../api';
import Table from '../Table/Table';

type Props = {}
const config = [
    {
      label: "Date",
      render: (company: CompanyCashFlow) => company.date,
    },
    {
      label: "Operating Cashflow",
      render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
      label: "Property/Machinery Cashflow",
      render: (company: CompanyCashFlow) =>
        company.investmentsInPropertyPlantAndEquipment,
    },
    {
      label: "Other Investing Cashflow",
      render: (company: CompanyCashFlow) => company.otherInvestingActivites,
    },
    {
      label: "Debt Cashflow",
      render: (company: CompanyCashFlow) =>
        company.netCashUsedProvidedByFinancingActivities,
    },
    {
      label: "CapEX",
      render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
      label: "Free Cash Flow",
      render: (company: CompanyCashFlow) => company.freeCashFlow,
    },
  ];


const CashFlowStatement = (props: Props) => {

    const ticker = useOutletContext<string>();
    const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>();

    useEffect(() => {
      const fetchCashFlow = async () => {
        const result = await getCashFlowStatement(ticker!);
        setCashFlowData(result?.data);
      }
      fetchCashFlow();

    }, [])
    

  return (
    <>
        { cashFlowData ? (
        <>
            <Table config={config} data={cashFlowData}/>
        </>) : (
        <>
            <h1>No results</h1>
        </>)}
    </>
  )
}

export default CashFlowStatement
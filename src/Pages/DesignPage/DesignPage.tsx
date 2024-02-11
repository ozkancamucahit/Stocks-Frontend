
import React from 'react'
import Table from "../../components/Table/Table";
import RatioList from '../../components/RatioList/RatioList';
import { CompanyKeyMetrics } from '../../company';
import { testIncomeStatementData } from '../../components/Table/testData';

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
    subTitle: "total value of all"
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>Design PAGE</h1>
      <h2>place for design files schemas</h2>

      <RatioList data={testIncomeStatementData} config= {tableConfig}/>  
      <Table data={testIncomeStatementData} config={tableConfig}/>
    </>
  );
}

export default DesignPage


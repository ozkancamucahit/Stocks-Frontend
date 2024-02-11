
import React from 'react'
import Table from "../../components/Table/Table";
import RatioList from '../../components/RatioList/RatioList';

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>Design PAGE</h1>
      <h2>place for design files schemas</h2>

      <RatioList />  
      <Table />
    </>
  );
}

export default DesignPage


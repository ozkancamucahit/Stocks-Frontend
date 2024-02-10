import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";

interface Props {}

const CompanyPage = (props: Props) => {

  let {ticker} = useParams();
  const [company, setCompany] = useState<CompanyProfile>();


  useEffect( () => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    }
    getProfileInit(); // call async func after defined

  }, []);

  return <>
  {company ? (<div>{company.companyName}</div>) : (<div>Company not found</div>)}
  </>;
};

export default CompanyPage;
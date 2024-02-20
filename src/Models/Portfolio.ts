

export type PortfolioGet = {
  id: number;
  symbol:string;
  companyName :string;
  purchase : string;
  lastDiv : number;
  industry: string;
  marketCap: string;
  comments : any;

}

export type PortfolioPost = {
  symbol :string;
}



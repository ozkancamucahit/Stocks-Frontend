import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignPage/DesignPage";
import BalanceSheet from "../components/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../components/CashFlowStatement/CashFlowStatement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "design-guide", element: <DesignPage /> },
      {
        path: "company/:ticker", element: <CompanyPage />,
        children: [
            { path: "company-profile", element: <CompanyProfile /> },
            { path: "income-statement", element: <IncomeStatement /> },
            { path: "balance-sheet-statement", element: <BalanceSheet /> },
            { path: "cashflow-statement", element: <CashFlowStatement /> }
        ],
      },
    ],
  },
]);





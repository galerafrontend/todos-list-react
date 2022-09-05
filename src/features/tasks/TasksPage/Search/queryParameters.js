import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

export const useQueryParameter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  return searchParams.get(searchQueryParamName);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    {value === undefined ? searchParams.delete(key) : searchParams.set(key, value)} 
  
    history.push(`${location.pathname}?${searchParams.toString()}`)
  };
};
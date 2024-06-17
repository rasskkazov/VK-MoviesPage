import { useLocation } from "react-router-dom";
import qs from "qs";

export const useQueryParams = () => {
  const queryString = useLocation().search;
  const params = qs.parse(queryString, { ignoreQueryPrefix: true });
  return params;
};

import { useParams } from "react-router-dom";
export const MovieList = () => {
  const { pageNumber } = useParams();
  const curPage = pageNumber ?? "1";
  return <div className="list">Page number is {curPage}</div>;
};

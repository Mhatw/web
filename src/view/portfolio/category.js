import { useParams } from "react-router-dom";

export default function Category() {
  let params = useParams();
  console.log(params);
  return <h1>Invoice</h1>;
}

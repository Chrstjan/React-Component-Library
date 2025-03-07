import { useParams } from "react-router-dom"

export const CategoryProductsPage = () => {
    const { category, product } = useParams();
  return (
    <>
        <p>{category}</p>
        <p>{product}</p>
    </>
  )
}
import { useParams } from "react-router-dom"
import { BreadCrumb } from "../components/BreadCrumb/BreadCrumb";

export const ProductCategoriesPage = () => {
    const { category } = useParams();
  return (
    <>
    <p>ProductCategories</p>
    <BreadCrumb />
    <p>{category}</p>
    </>
  ) 
}
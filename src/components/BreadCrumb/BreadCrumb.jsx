import { NavLink, useParams } from "react-router-dom"

export const BreadCrumb = () => {
    const { category, product } = useParams();
  return (
    <div>
        <>
            {category && <><NavLink to="/products">Products</NavLink></>}
        </>
    </div>
  )
}
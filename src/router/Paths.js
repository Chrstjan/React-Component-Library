import { LandingPage } from "../pages/LandingPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ProductCategoriesPage } from "../pages/ProductCategoriesPage";
import { CategoryProductsPage } from "../pages/CategoryProductsPage";
import { UserPage } from "../pages/UserPage";
import { PageNotFound } from "../pages/PageNotFound";

export const paths = [
  {
    id: 1,
    path: "/",
    element: LandingPage,
    text: "Home",
  },
  {
    id: 2,
    path: "/products",
    element: ProductsPage,
    text: "Products"
  },
  {
    id: 3,
    path: "/products/:category",
    element: ProductCategoriesPage,
  },
  {
    id: 4,
    path: "/products/:category/:product",
    element: CategoryProductsPage,
  },
  {
    id: 40,
    path: "/*",
    element: PageNotFound,
  },
];

export const protectedPaths = [
  {
    id: 1,
    path: "/user",
    element: UserPage,
    text: "My Page",
  },
];

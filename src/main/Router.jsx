import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home'
import Index from "./Index";
import NotFound from './NotFound'

import Categories from '../pages/Categories'
import Products from "../pages/Products";

const AppRouter = createBrowserRouter([
  {
    path: "/baby-boutique/",
    element: <Index />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/baby-boutique/:category",
        element: <Categories />,
      },
      {
        path: "/baby-boutique/:category/:item",
        element: <Products />,
      },
    ],
  },
]);

export default AppRouter;
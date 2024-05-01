import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home'
import Index from "./Index";
import NotFound from './NotFound'

import Categories from '../pages/Categories'
import Products from "../pages/Products";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <NotFound />,
      },
      {
        path: "/:category",
        element: <Categories />,
      },
      {
        path: "/:category/:item",
        element: <Products />,
      },
    ],
  },
]);

export default AppRouter;
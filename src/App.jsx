import { RouterProvider } from "react-router-dom"

import AppRouter from "./main/Router"

export const RootURL = "/baby-boutique/";


function App() {

  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App

import { RouterProvider } from "react-router-dom"

import AppRouter from "./main/Router"

function App() {

  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App

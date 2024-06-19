import { RouterProvider } from "react-router-dom"
import { useEffect, useState } from "react";

import AppRouter from "./main/Router"
import DataBase from "./db/database";

export const RootURL = "/baby-boutique/";


function App() {

  let [status, setStatus] = useState(0);

  useEffect(() => {
    DataBase.init(() => {
      setStatus(1);
    })
  },[])

  if(status == 0)
    return <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border primary-text">
        <span className="sr-only"></span>
      </div>
    </div>

  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App

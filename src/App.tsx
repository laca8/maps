import { lazy } from "react";
const Map = lazy(() => import("./components/Map"));


function App() {


  return (
    <>
      <Map />
    </>
  )
}

export default App

import { BrowserRouter } from "react-router-dom";
import SiteRoutes from "./SiteRoutes";
import Cursor from "./Components/Cursor";

export default function App() {
  return(
    <>
      <Cursor />
      <BrowserRouter>
        <SiteRoutes />
      </BrowserRouter>
    </>
  )
}
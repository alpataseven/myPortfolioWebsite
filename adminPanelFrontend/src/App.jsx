import { BrowserRouter } from "react-router"
import SiteRoutes from "./SiteRoutes"

function App() {

  return (
    <>
      <BrowserRouter>
        <SiteRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

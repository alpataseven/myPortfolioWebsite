import { BrowserRouter } from "react-router-dom"
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

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Description from "./components/Description";



function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Description />
      <Footer />
    </>
  )
}

export default App

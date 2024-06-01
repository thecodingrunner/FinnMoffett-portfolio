import { Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Project from "./pages/projects/Project";
import ScrollToTop from "./components/ScrollToTop";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  )
}

export default App
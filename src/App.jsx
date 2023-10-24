import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import MyHistory from "./pages/MyHistory";
import Projects from "./pages/Projects";
import NoFound from "./pages/NoFound";
import Footer from "./components/Footer";
import { Certificates } from "./pages/Certificates";
import Visor from "./components/Visor";


function App() {

  const stateFile = useSelector(state => state.visualizador[0].active);

  return (

    <BrowserRouter>

      <Header />
      <About />
      <Dashboard />

      { stateFile ? <Visor /> : '' }

      <Routes>

        <Route path="/" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/history" element={<MyHistory />} />
        <Route path="*" element={<NoFound />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App

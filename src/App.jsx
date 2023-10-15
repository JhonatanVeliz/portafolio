import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import MyHistory from "./pages/MyHistory";
import Projects from "./pages/Projects";
import NoFound from "./pages/NoFound";
import Footer from "./components/Footer";

function App() {

  return (

    <BrowserRouter>

      <Header />
      <About />
      <Dashboard />

      <Routes>

        <Route path="/" element={<Projects />} />
        <Route path="/certifys" element={<Projects />} />
        <Route path="/history" element={<MyHistory />} />
        <Route path="*" element={<NoFound />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App

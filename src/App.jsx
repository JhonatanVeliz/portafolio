import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";

function App() {

  return (
    <BrowserRouter>

      <Header />
      <About />

      <Routes>

        {/* <Route path="/" element={<Header />} /> */}

      </Routes>

    </BrowserRouter>
  )
}

export default App

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./layout";
import Dashboard from "./pages/dasboard/pages";
import About from "./pages/about/about";
import List from "./pages/listikan/list";
import Rekomendasi from "./pages/rekomendasi/rekomendasi";
import Detailikan from "./pages/listikan/detailikan";


function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/About' element={<About />} />
          <Route path='/Ikan' element={<List />} />
          <Route path='/Rekomendasi' element={<Rekomendasi />} />
          <Route path='/Detailikan' element={<Detailikan />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./layout";
import Dasboard from "./pages/dasboard/pages";
import About from "./pages/about/about";
import List from "./pages/listikan/list";
import Rekomendasi from "./pages/rekomendasi/rekomendasi";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path='/Dashboard' element={<Dasboard />} />
          <Route path='/About' element={<About />} />
          <Route path='/Ikan' element={<List />} />
          <Route path='/Rekomendasi' element={<Rekomendasi />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;

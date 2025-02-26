import { useState } from "react";
import Header from "./Components/Header";
//import NewsBoard from "./Components/NewsBoard";
import Footer from "./Components/Footer";
import NewsBoard from "./components/NewsBoard";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Header setCategory={setCategory} />
      <Routes>
        <Route path="/" element={<NewsBoard category={category} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

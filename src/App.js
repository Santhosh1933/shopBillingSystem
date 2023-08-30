import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { GlobalContext } from "./components/GlobalContext";
import { Header } from "./components/Header";
import { Products } from "./components/Products";

function App() {
  const [cartProduct, setCartProduct] = useState([]);
  return (
    <GlobalContext.Provider value={{ cartProduct, setCartProduct }}>
      <div className=" w-full h-fit min-h-screen">
        <Header />
        <Products />
        <Footer />
      </div>
    </GlobalContext.Provider>
  );
}

export default App;

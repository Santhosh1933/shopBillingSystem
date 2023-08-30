import "./App.css";
import { Header } from "./components/Header";
import { Products } from "./components/Products";

function App() {
  return (
    <div className=" w-full h-fit min-h-screen">
      <Header />
      <Products />
    </div>
  );
}

export default App;

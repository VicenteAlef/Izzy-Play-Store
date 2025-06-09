import { useState } from "react";
import Carousel from "./components/Carousel";
import "./App.css";
import img1 from "./assets/PlayStation5.jpg";
import img2 from "./assets/XboxSeries.png";
import img3 from "./assets/NintendoSwitch2.jpg";
import ps5 from "./assets/ps5.webp";
import xboxs from "./assets/xboxseries-s.webp";
import xboxX from "./assets/xboxX.webp";

function App() {
  const [count, setCount] = useState(0);
  const images = [img1, img2, img3];

  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full min-h-screen bg-linear-to-r from-cyan-900 to-blue-900">
      <header className="h-[60px] flex items-center bg-gray-950 text-white text-2xl px-[10%]">
        Izzy Play
      </header>

      <main className="w-full px-2 sm:px-[5%] lg:px-[15%]">
        <Carousel images={images} />
        <h2 className="text-white text-5xl mb-10">Mais Vendidos</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 mb-30">
          <div className="p-5 bg-gray-50 rounded-sm cursor-pointer">
            <img src={ps5} alt="" className="mb-5" />
            <p className="sm:text-xl mb-5">PlayStation 5 Slim Disk + 2 Jogos</p>
            <div className="flex items-start">
              <p className="text-md mr-1">R$</p>
              <p className="text-2xl">3.899</p>
              <p className="text-md mr-1">,99</p>
            </div>
          </div>
          <div className="p-5 bg-gray-50 rounded-sm cursor-pointer">
            <img src={xboxs} alt="" className="mb-5" />
            <p className="sm:text-xl mb-5">Xbox Series S</p>
            <div className="flex items-start">
              <p className="text-md mr-1">R$</p>
              <p className="text-2xl">2.499</p>
              <p className="text-md mr-1">,99</p>
            </div>
          </div>
          <div className="p-5 bg-gray-50 rounded-sm cursor-pointer">
            <img src={xboxX} alt="" className="mb-5" />
            <p className="sm:text-xl mb-5">Xbox Series X - Diablo 3</p>
            <div className="flex items-start">
              <p className="text-md mr-1">R$</p>
              <p className="text-2xl">4.500</p>
              <p className="text-md mr-1">,00</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full h-[150px] flex items-center justify-center bg-black text-white">
        2025 - Vicente Dev &copy;
      </footer>
    </div>
  );
}

export default App;

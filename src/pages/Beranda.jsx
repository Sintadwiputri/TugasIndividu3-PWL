// component
import Header from "../components/Header";
import { Curious } from "../components/Assets";
import { ThemeContext } from "../context/themeContext";
import { AddButton, MinButton, ResetButton } from "../components/Button";

// library
import React, { useContext, useState } from "react";
import { ScreenContext } from "../context/screenContenxt";

const Beranda = () => {
  const { theme } = useContext(ThemeContext);
  const { screenSize } = useContext(ScreenContext);
  const [number, setNumber] = useState(0);
  
  return (
    <>
      <Header />
      <main className={theme}>
        <div
          className={`container ${
            screenSize > 1000
              ? "row flex-full"
              : screenSize > 600 && screenSize <= 1000
              ? "column"
              : "column full-width item-center"
          }`}
        >
          <div className="container row item-center">
            <Curious />
            <div className="container column">
              <h1>Apa itu Fragenzentrum?</h1>
              <p>
              Fragenzentrum merupakan website bank soal digital paling terjangkau yang didalamnya terdapat
              soal-soal yang sudah lolos uji verifikasi, terupdate, dan terpercaya.
              </p>
              <h1>Sejarah Fragenzentrum</h1>
              <p>
              Fragenzentrum di ambil dari Jerman, yang berarti Pusat Soal. Dengan harapan website ini
              akan menjadi website bank soal yang akan terus berkembang dari tahun ketahun, tentu 
              akan diminati banyak kalangan. Selain itu, pendiri dari Fragenzentrum sendiri 
              merupakan keturunan asli jerman yang sudah menetap lama di indonesia.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Beranda;

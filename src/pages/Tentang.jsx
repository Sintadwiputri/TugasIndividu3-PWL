import React, { useContext, useEffect, useState } from "react";
import {
  Soshum,
  Saintek,
  CPNS,
  Polri,
} from "../components/Assets";


const Tentang = () => {
  return (
    <main>
      <div className="container column full-width">
        <h1>PAKET PEMBELAJARAN</h1>
        <div className="container row full-width minimal-gap">
          <div className="container column">
            <h3>Paket PTN Soshum</h3>
            <Soshum />
          </div>
          <div className="container column">
            <h3>Paket PTN Saintek</h3>
            <Saintek />
          </div>
          <div className="container column">
            <h3>Paket CPNS</h3>
            <CPNS />
          </div>
        </div>
      </div>
      <div className="container column full-width">
        <div className="container row full-width minimal-gap">
          <div className="container column">
            <h3>Paket Tes Polri</h3>
            <Polri />
          </div>
          <div className="container column">
            <h3>Paket PTN Saintek</h3>
            <Saintek />
          </div>
          <div className="container column">
            <h3>Paket CPNS</h3>
            <CPNS />
          </div>
        </div>
      </div>
      <div className="container column full-width">
        <div className="container row full-width minimal-gap">
          <div className="container column">
            <h3>Paket PTN Soshum</h3>
            <Soshum />
          </div>
          <div className="container column">
            <h3>Paket PTN Saintek</h3>
            <Saintek />
          </div>
          <div className="container column">
            <h3>Paket CPNS</h3>
            <CPNS />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Tentang;
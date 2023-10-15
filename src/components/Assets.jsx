import React from "react";
import Bibliophile from "../assets/Bibliophile-cuate.png";
import saintek from "../assets/saintek.png";
import cpns from "../assets/cpns.jpg";
import soshum from "../assets/soshum.png";
import polri from "../assets/polri.jpg"

export const Curious = ({ width }) => {
  return (
    <>
      <a
        href="https://storyset.com/illustration/bibliophile/cuate"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={width == null ? 300 : width}
          height={width == null ? 300 : width}
          src={Bibliophile}
          alt="Bibliophile-cuate.png"
        />
      </a>
    </>
  );
};
export const Soshum = () => {
  return(
    <>
      <img
      className="full-Width"
      src={soshum}
      alt="soshum.png"
      />
    </>
  );
};
export const Saintek = () => {
  return (
    <>
      <img
        width={300} 
        src={saintek}
        alt="saintek.png"
      />
    </>
  );
};
export const CPNS = () => {
  return (
    <>
      <img
         width={300} 
        src={cpns}
        alt="cpns.jpg"
      />
    </>
  );
};

export const Polri = () => {
  return (
    <>
      <img
        width={300} 
         src={polri}
         alt="polri.jpg"
      />
    </>
  );
};

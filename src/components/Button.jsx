import React from "react";
import * as AiIcon from "react-icons/ai";


export const ScrollTop = ({ actions }) => {
  return (
    <>
      <button className="back-to-top" onClick={actions}>
        <AiIcon.AiOutlineArrowUp size={32} color="#EEE2DE" />
      </button>
    </>
  );
};

export const DirectButton = ({ to_page, text }) => {
  return (
    <>
      <a
        href={to_page}
        target="_blank"
        rel="noreferrer"
        className="direct container row minimal-gap item-center"
      >
        {text}
        <AiIcon.AiOutlineRight size={24} color="##fbff0c" />
      </a>
    </>
  );
};

export const SendButton = ({ actions }) => {
  return (
    <button className="send" onClick={actions}>
      Kirim
    </button>
  );
};

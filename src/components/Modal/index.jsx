import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/index";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text }) => {
  return ( 
    <>
      <Backdrop onClick={handleClose}>
        <motion.div
          //event bubbling: prevent clicks on modal from bubbling to backdrop
          onClick={(e) => e.stopPropagation()}
          className="w-[50%] m-auto px-0 py-2 flex flex-col items-center bg-purple-700 rounded-lg text-white"
          variants={dropIn}
          
          initial="hidden"
          animate="visible"
          exit="exit"
        >

          <ModalText text={text} />
          <ModalButton onClick={handleClose} label="Close" />

        </motion.div>
      </Backdrop>
    </>
  );
};

const ModalText = ({ text }) => (
  <div className="p-10">
    <h3>{text}</h3>
    <h5>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam
      labore, totam expedita voluptates tempore asperiores sequi, alias cum
      veritatis, minima dolor iste similique eos id. Porro, culpa? Officiis,
      placeat?
    </h5>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="bg-white text-black p-3 rounded-lg"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;


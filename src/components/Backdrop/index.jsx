import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <>
      <motion.div
        className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/90"
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Backdrop;

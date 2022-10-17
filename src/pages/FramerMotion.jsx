import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/Modal/index";

const FramerMotion = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <>
      <div>FramerMotion</div>

      <div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-5 rounded-lg m-20"
          onClick={() => (modalOpen ? close() : open())}
        >
          Launch model
        </motion.button>
        
        {/* // Enables the animation of components that have been removed from the
        tree */}
        <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          exitBeforeEnter={true}
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
        >
          
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>

      </div>
    </>
  );
};

export default FramerMotion;

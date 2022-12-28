import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import ApplicantsTable from "../table/ApplicantsTable";
import { ModaL } from './styles'

const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { duration: 0.1, type: "spring", damping: 25, stiffness: 500 } },
  exit: { y: "100vh", opacity: 0 },
};

interface Props {
  handleClose: () => void;
}

const Modal: React.FC<Props> = ({ handleClose }) => {
  return (
    <Backdrop onClick={handleClose}>
      <ModaL as={motion.div} onClick={(e) => e.stopPropagation()} variants={dropIn} initial="hidden" animate="visible" exit="exit">
        <ApplicantsTable />
        <button onClick={handleClose}>Close</button>
      </ModaL>
    </Backdrop>
  );
};

export default Modal;

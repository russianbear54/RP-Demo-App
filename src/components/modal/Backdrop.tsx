import { motion } from "framer-motion";
import {BackDrop} from '../../styles/Backdrop/styles'

const Backdrop = ({ children, onClick }) => {
  return (
    <BackDrop as={motion.div} onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </BackDrop>
  );
};

export default Backdrop;

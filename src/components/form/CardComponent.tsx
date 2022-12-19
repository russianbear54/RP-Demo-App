import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { selectForms } from "../../store/slices/formsSlice";
import { Circle, Card, Label, Value, TextDiv, Pair, FPContainer, CardDiv } from "../../styles/FormPage/styles";
import { Button } from "@mui/material";
import Modal from "../modal/Modal";
import FormPageTitles from "./FormPageTitles";
import { selectForM } from "../../store/slices/formSlice";
import { useAppSelector } from "../../store/hooks";

const CardComponent: React.FC = () => {
  const values = useAppSelector(selectForms);
  const value = useAppSelector(selectForM);

  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <FPContainer>
      <FormPageTitles title={"Show Card"} />
      <CardDiv>
        <Circle />
        <Card>
          <TextDiv>
            <Pair>
              <Label>Name</Label>
              <Value>
                {value.firstName} {value.lastName}
              </Value>
            </Pair>
            <Pair>
              <Label>Age</Label>
              <Value>{value.age}</Value>
            </Pair>
            <Pair>
              <Label>Department</Label>
              <Value>{value.department}</Value>
            </Pair>
          </TextDiv>
        </Card>
      </CardDiv>
      {values.length > 1 && (
        <div>
          <Button
            variant="contained"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            component={motion.button}
            onClick={() => (modalOpen ? close() : open())}>
            View Applicants
          </Button>
          <AnimatePresence initial={false} mode="wait">
            {modalOpen && <Modal handleClose={close} />}
          </AnimatePresence>
        </div>
      )}
    </FPContainer>
  );
};

export default CardComponent;

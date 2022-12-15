import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectForms } from "../../store/slices/formsSlice";
import { Circle, Card, Label, Value, TextDiv, Pair, FPContainer, CardDiv } from "../../styles/FormPage/styles";
import { Button } from "@mui/material";

import Modal from "../modal/Modal";

import FormPageTitles from "./FormPageTitles";

const CardComponent: React.FC = () => {
  const value = useSelector(selectForms);

  const [modalOpen, setModalOpen] = useState(false);

  console.log("value33", value);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const properValue = value[value.length - 1];

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
                {properValue.firstName} {properValue.lastName}
              </Value>
            </Pair>
            <Pair>
              <Label>Age</Label>
              <Value>{properValue.age}</Value>
            </Pair>
            <Pair>
              <Label>Department</Label>
              <Value>{properValue.department}</Value>
            </Pair>
          </TextDiv>
        </Card>
      </CardDiv>
      {value.length > 1 && (
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

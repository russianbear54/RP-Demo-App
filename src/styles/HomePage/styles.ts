import styled from "styled-components";
import { styles } from "../index";

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  counter-reset: instr;
`;

export const Par = styled.p`
  position: relative;
  font-family: ${styles.color.blue.instruction};
  width: 52em;
  height: 4em;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5em;
  line-height: 2em;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  color: #000000;
  opacity: 0.2;

  ${styles.screen.iPadMini} {
    width: 30em;
    font-size: 1.25em;
  }
`;

export const Trio = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  ${styles.screen.iPadMini} {
    width: 70vw;
  }
`;

export const Line = styled.div`
  width: 91.25em;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 5em;

  ${styles.screen.largeScreen} {
    width: 85vw;
  }
  ${styles.screen.smallScreen} {
    width: 80vw;
  }

  ${styles.screen.iPadMini} {
    width: 70vw;
  }
`;

// INSTRUCTIONS

export const InstructionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  height: 2.25em;
  font-style: normal;
  font-weight: 700;
  font-size: 2.25em;
  display: flex;
  align-items: center;
  letter-spacing: 0.461865px;
  color: ${styles.color.blue.instruction};

  ::before {
    counter-increment: instr;
    content: counter(instr) ".";
  }

  ${styles.screen.largeScreen} {
    font-size: 2em;
  }

  ${styles.screen.smallScreen} {
    font-size: 1.75em;
  }

  ${styles.screen.iPadMini} {
    font-size: 1.25em;
  }
`;

export const Instructions = styled.p`
  gap: 0.65em;
  display: flex;
  width: 24.5em;
  /* height: 4.5em; */
  text-align: left;
  font-family: ${styles.font.card};
  font-style: normal;
  font-weight: 400;
  font-size: 1.25em;
  line-height: 1.5em;
  align-items: center;
  letter-spacing: 0.5px;
  color: ${styles.color.blue.instruction};
  opacity: 0.5;
  margin-left: 0.5em;
  padding-left: 0.5em;
  border-left: 2.35px solid ${styles.color.blue.instruction};

  ${styles.screen.largeScreen} {
    width: 13em;
    line-height: 1em;
    font-size: 1.5em;
  }

  ${styles.screen.smallScreen} {
    width: 12em;
    line-height: 1em;
    font-size: 1.25em;
  }

  ${styles.screen.iPadMini} {
    width: 12em;
    line-height: 1em;
    font-size: 0.75em;
  }
`;

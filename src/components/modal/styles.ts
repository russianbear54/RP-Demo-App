import styled from "styled-components";
import { styles } from "../../styles";

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
`;

export const ModaL = styled.div`
  width: clamp(50%, 700px, 90%);
  height: min-content;
  /* height: min(50%, 300px); */
  margin: auto;
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${styles.gradient.blue};
`;

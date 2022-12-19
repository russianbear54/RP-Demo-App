import styled from "styled-components";
import { styles } from "../index";

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

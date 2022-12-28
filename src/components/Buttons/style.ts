import styled from "styled-components";
import { styles } from "../../styles";


export const ButtonsDiv = styled.div`
position: relative;
margin: auto;
display: flex;
justify-content: space-between;
width: 31.25em;

${styles.screen.smallScreen} {
  width: 22em;
}

${styles.screen.iPadMini} {
  width: 25em;
}
`;
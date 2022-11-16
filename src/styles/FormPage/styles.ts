import styled from "styled-components";
import { styles } from "../index";

export const FormPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  ${styles.screen.mobileLG}{
    flex-direction: column;
  
  }
`;


export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30em;


  ${styles.screen.iPadMini} {
    width: 18em;
  }

  ${styles.screen.mobileLG}{
    width:100%;
    
   
  }
  

`;

export const CardComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30em;
 

  ${styles.screen.iPadMini} {
    width: 18em;
    height: 23em;
    justify-content: space-between;
  }
  ${styles.screen.mobileLG}{
    width:100%;
  }
`;

export const Split = styled.span`
  height: 40em;
  border: 1px solid #000000;
  ${styles.screen.iPadMini} {
    height: 30em;
  }

  ${styles.screen.mobileLG}{
    width: 20em;
    height: 0;
    transform: rotate(90deg);
    display: none;
  }
`;

export const FormPageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

// export const CardDiv=styled.div`
// border: ${styles.border.test};

// ${styles.screen.iPadMini}{
//   bottom:5em;
// }
// `

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 24.25em;
  height: 23.25em;
  border: 3.48px solid #0038fe;
  border-radius: 26.08px;
  background-color: ${styles.color.gray};

  ${styles.screen.largeScreen} {
    /* width: calc((1200 / 1920) * 24.25em);
    height: calc((1200 / 1920) * 23.25em); */
    width: 21.25em;
  height: 20.25em;
  }

  ${styles.screen.smallScreen} {
    /* width: calc((1024 / 1920) * 24.25em);
    height: calc((1024 / 1920) * 23.25em); */
    width: 16em;
    height: 15.25em;
  }

  ${styles.screen.iPadMini} {
    /* width: calc((768 / 1920) * 24.25em); */

    width: 12em;
    height: 11.75em;
    bottom:3em;
  }

  ${styles.screen.mobileLG}{
    width: 65vw;
    height: 18em;
  }
`;

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 2.5em;
  margin-top: 5.5em;
  height: 100%;

  ${styles.screen.largeScreen} {
    margin-left: calc((1200 / 1920) * 2.5em);
    margin-top: calc((1200 / 1920) * 5.5em);
    /* height: 50%; */
  }

  ${styles.screen.mobileLG}{
    margin-bottom: 2em;
  }
`;

export const Pair = styled.div`
  height: 4em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${styles.screen.largeScreen} {
    height: 2em;
  }
`;

export const Circle = styled.div`
  position: relative;
  height: 8em;
  width: 8em;
  background-color: #0038fe;
  bottom: -4.25em;
  margin: auto;
  border-radius: 50%;

  ${styles.screen.largeScreen} {
    width: calc((1200 / 1920) * 8em);
    height: calc((1200 / 1920) * 8em);
    bottom: calc((1200 / 1920) * -4.25em);
    /* width: 7em;
    height: 7em; */

    /* bottom: -3.8em; */
  }

  ${styles.screen.smallScreen} {
    width: calc((1024 / 1920) * 8em);
    height: calc((1024 / 1920) * 8em);
    bottom: calc((1024 / 1920) * -4.25em);
    /* width: 5.25em;
    height: 5.25em;
    bottom: -2.75em; */
  }

  ${styles.screen.iPadMini} {
    width: calc((768 / 1920) * 8em);
    height: calc((768 / 1920) * 8em);
    bottom: calc((768 / 1920) * -4.25em);
    /* width: 4.5em;
    height: 4.5em;
    bottom: -2.5em; */
  }

  ${styles.screen.mobileLG}{
    width:5em;
    height: 5em;
    bottom: -2.65em;
  }
`;

export const Label = styled.div`
  font-family: ${styles.font.card};
  font-style: normal;
  /* align-items: center; */
  font-weight: 400;
  font-size: 1.25em;
  letter-spacing: 0.133273px;
  color: ${styles.color.blue.regular};
  opacity: 0.5;

  ${styles.screen.largeScreen} {
    font-size: calc((1200 / 1920) * 1.25em);
  }

  ${styles.screen.smallScreen} {
    font-size: calc((1024 / 1920) * 1.25em);
    /* font-size: 1.25em; */
  }

  ${styles.screen.iPadMini} {
    /* font-size: calc((768 / 1920) * 1.25em); */
    font-size: 1em;
  }

  ${styles.screen.mobileLG}{
    font-size: 1.25em;
    
  }
`;

export const Value = styled.div`
  font-family: ${styles.font.regular};
  font-style: normal;
  /* align-items: center; */
  font-weight: 600;
  font-size: 1.812em;
  letter-spacing: 0.187208px;
  color: ${styles.color.blue.regular};
  /* color: #0038FE; */

  ${styles.screen.extraLargeScreen} {
    font-size: calc((1200 / 1920) * 1.25em);
  }

  ${styles.screen.smallScreen} {
    font-size: calc((1024 / 1920) * 1.25em);
    /* font-size: 1.25em; */
    margin-left: 2em;
  }

  ${styles.screen.iPadMini} {
    font-size: calc((768 / 1920) * 1.25em);
    /* font-size: 1em; */
    margin-bottom: 1em;
  }

  ${styles.screen.mobileLG}{
    font-size: 1.25em;
    margin-left: 0;
   
    
  }
`;

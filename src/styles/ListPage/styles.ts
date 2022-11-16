import styled from "styled-components";
import { styles } from "../index";

export const ListMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

export const ListDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  width: 87em;
  justify-content: space-between;
  gap: 2em;

  ${styles.screen.smallScreen} {
    width: 80vw;
    justify-content: space-around;
  }

  ${styles.screen.iPadMini} {
    width: 70vw;
    justify-content: space-around;
  }

  ${styles.screen.mobileLG}{
    width: 95vw;
    gap:1em;
 
  }
`;

export const ShipCard = styled.div`
  display: flex;
  color: ${styles.color.blue.regular};
  width: 20em;
  height: 14em;
  background: ${styles.color.gray.lightGray};
  box-shadow: 0px 3.49584px 13.9834px -3.49584px rgba(0, 0, 0, 0.25);
  border-radius: 11.6939px;

  ${styles.screen.smallScreen} {
    width: 12em;
    height: 8em;
  }

  ${styles.screen.iPadMini} {
    width: 15em;
    height: 10em;
  }

  ${styles.screen.mobileLG}{
    width: 10em;
    height: 7em;

  }
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;

  ${styles.screen.mobileLG}{
    padding: .25em;
    padding-left: 1em;
  }

`;
export const Label = styled.div`
  font-family: ${styles.font.card};
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  display: flex;
  align-items: center;
  letter-spacing: 0.0896501px;
  color: ${styles.color.blue.regular};
  opacity: 0.5;

  ${styles.screen.smallScreen} {
    font-size: 0.65em;
  }

  ${styles.screen.iPadMini} {
    font-size: 0.75em;
  }

  /* ${styles.screen.mobileLG}{
    font-size: .5em;
  } */
`;

export const Value = styled.div`
  font-family: ${styles.font.card};
  font-style: normal;
  font-weight: 600;
  font-size: 1.25em;
  letter-spacing: 0.125931px;
  color: ${styles.color.blue.regular};

  ${styles.screen.smallScreen} {
    font-size: 0.75em;
  }

  ${styles.screen.iPadMini} {
    font-size: 1em;
  }
  ${styles.screen.mobileLG}{
    font-size: .75em;
  }
`;

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  margin: 1em;

  ${styles.screen.mobileLG}{
    justify-content: space-between;
    font-size: .75em;
    margin: .5em;
  }

`;
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

export const Button = styled.button`
  font-family: "Oranienbaum";
  font-style: normal;
  font-weight: 400;
  font-size: 2em;
  /* line-height: 35px; */
  background: ${styles.color.blue.regular};
  color: ${styles.color.white};
  width: 6em;
  /* height: 2em; */
  border-radius: 14px;

  ${styles.screen.smallScreen} {
    /* width: 4em;
    height: 2.25em; */
    font-size: 1.5em;
  }

  ${styles.screen.iPadMini} {
    /* width: 25em; */
    font-size: 1.25em;
  }
`;

///// COUNTRIES

export const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  color: ${styles.color.blue.regular};
  width: 19em;
  height: 14em;
  background: ${styles.color.gray.lightGray};
  box-shadow: 0px 3.49584px 13.9834px -3.49584px rgba(0, 0, 0, 0.25);
  border-radius: 11.6939px;
  margin: auto;
`;

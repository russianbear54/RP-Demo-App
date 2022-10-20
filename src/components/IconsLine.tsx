import { ReactComponent as ReactLogo } from "../images/ToolsIcons/react.svg";
import { ReactComponent as ApolloLogo } from "../images/ToolsIcons/apollographql.svg";
import { ReactComponent as ReactRouter } from "../images/ToolsIcons/reactrouter.svg";
import { ReactComponent as Redux } from "../images/ToolsIcons/redux.svg";
import { ReactComponent as StyleComps } from "../images/ToolsIcons/styledcomponents.svg";
import { ReactComponent as TypeScript } from "../images/ToolsIcons/typescript.svg";
import { ReactComponent as Formik } from "../images/ToolsIcons/formik.svg";
import { ReactComponent as MUI } from "../images/ToolsIcons/mui.svg";
import { ReactComponent as GraphQL } from "../images/ToolsIcons/graphql.svg";
import {Line} from '../styles/HomePage/styles'




// const Logo=styled.div`
// width:1690ps;
// `

// const pix = [ReactLogo, MUI, ApolloLogo, ReactRouter, Redux, StyleComps, TypeScript, Formik];

// pix.forEach((element) => console.log("element", element));

// const images=pix.map((pic,index)=>{
//     return <title={pic} fill="#CDCDCD" width={75.55}/>
// })

const IconsLine:React.FC=()=> {
  return (
    <Line>
      <ReactLogo fill="#CDCDCD" width={75.55} />
      <Redux fill="#CDCDCD" width={63.25} />
      <TypeScript fill="#CDCDCD" width={67.28} />
      <GraphQL fill="#CDCDCD" width={59.88} />
      <ApolloLogo fill="#CDCDCD" width={67.28} />
      <ReactRouter fill="#CDCDCD" width={123.57} />
      <StyleComps fill="#CDCDCD" width={154.15} />
      <MUI fill="#CDCDCD" width={77.84} />
      <Formik fill="#CDCDCD" width={57.8} />
    </Line>
  );
}

export default IconsLine;

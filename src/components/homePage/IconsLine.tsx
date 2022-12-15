import { Line } from "../../styles/HomePage/styles";
import { ToolsIcons } from "../../images/ToolsIcons";
import { useEffect, useState } from "react";
import {styles} from '../../styles/index'
import { useWidth } from "../../hooks/use-width";



const IconsLine: React.FC = () => {

  const [width, setWidth] = useState(null);

  const { height } = useWidth(width);


  useEffect(() => {
    setWidth(window.screen.width);
  }, []);



  const logos = [
    ToolsIcons.react(height, `${styles.color.gray.lightGray2}`),
    ToolsIcons.redux(height, `${styles.color.gray.lightGray2}`),
    ToolsIcons.typeScript(height, `${styles.color.gray.lightGray2}`),
    ToolsIcons.graphQL(height, `${styles.color.gray.lightGray2}`),
    ToolsIcons.apolloGraphQL(height, `${styles.color.gray.lightGray2}`),
    ToolsIcons.reactRouter(height, `${styles.color.gray.lightGray2}`),
    ToolsIcons.styledComponents(height, `${styles.color.gray.lightGray2}`),
    ToolsIcons.mui(height, `${styles.color.gray.lightGray2}`),
    ToolsIcons.formik(height, `${styles.color.gray.lightGray2}`),
  ];

  return <Line>{logos.map((logo,index)=><div key={index}>{logo}</div>)}</Line>;
};

export default IconsLine;

import { Line } from "./styles";
import { ToolsIcons } from "../../images/ToolsIcons";
import { useEffect, useState } from "react";
import {styles} from '../../styles/index'
import { useWidth } from "../../hooks/use-width";
import { motion } from "framer-motion";



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

  return <Line>{logos.map((logo,index)=><motion.div key={index} drag  whileHover={{ scale: 1.2, rotate: 90 }} whileTap={{
    scale: 0.8,
    rotate: -90,
    borderRadius: "100%"
  }}>{logo}</motion.div>)}</Line>;
};

export default IconsLine;

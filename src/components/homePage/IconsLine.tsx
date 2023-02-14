import { Line } from "./styles";
import { ToolsIcons } from "../../images/ToolsIcons";
import { useEffect, useState } from "react";
import { styles } from "../../styles/index";
import { useWidth } from "../../hooks/use-width";
import { motion } from "framer-motion";

interface Props {
  pageRef: any;
}

const IconsLine: React.FC<Props> = ({ pageRef }) => {
  const [width, setWidth] = useState(null);
  const { height } = useWidth(width);

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

  useEffect(() => {
    setWidth(window.screen.width);
  }, []);

  
  const handleTransitionEnd=()=>{
    alert('drag is over')
  }


  return (
    <>
      <Line>
        {logos.map((logo, index) => (
          <motion.div key={index} drag dragMomentum dragConstraints={pageRef} onDragTransitionEnd={handleTransitionEnd} >
            {logo}
          </motion.div>
        ))}
      </Line>
    </>
  );
};

export default IconsLine;

import { Line } from "../../styles/HomePage/styles";
import { ToolsIcons } from "../../images/ToolsIcons";
import { useEffect, useState } from "react";
import {styles} from '../../styles/index'

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const IconsLine: React.FC = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const width = windowSize.innerWidth;


  let height = 80;

  if (width <= 1200) {
    height = 70;
  }

  if (width <= 1024) {
    height = 60;
  }

  if (width <= 768) {
    height = 40;
  }



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

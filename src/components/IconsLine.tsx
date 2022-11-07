import { Line } from "../styles/HomePage/styles";
import { ToolsIcons } from "../images/ToolsIcons";
import { useEffect, useState } from "react";

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

  console.log(width);

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
    ToolsIcons.react(height, "#CDCDCD"),
    ToolsIcons.redux(height, "#CDCDCD"),
    ToolsIcons.typeScript(height, "#CDCDCD"),
    ToolsIcons.graphQL(height, "#CDCDCD"),
    ToolsIcons.apolloGraphQL(height, "#CDCDCD"),
    ToolsIcons.reactRouter(height, "#CDCDCD"),
    ToolsIcons.styledComponents(height, "#CDCDCD"),
    ToolsIcons.mui(height, "#CDCDCD"),
    ToolsIcons.formik(height, "#CDCDCD"),
  ];

  return <Line>{logos.map((logo,index)=><div key={index}>{logo}</div>)}</Line>;
};

export default IconsLine;

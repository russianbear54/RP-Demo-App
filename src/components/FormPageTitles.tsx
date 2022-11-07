import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { formPageTitleNorm, formPageTitle768, formPageTitle1024 } from "../styles/stylesMUI";

type Props = {
  title: string;
};

const FormPageTitles: React.FC<Props> = ({ title }) => {
  const w768 = useMediaQuery("(max-width:768px)");
  const w1024 = useMediaQuery("(max-width:1024px)");
  const w1200 = useMediaQuery("(max-width:1200px)");

  let SIZE;



  if (!w768 && !w1024) {
    SIZE = formPageTitleNorm;
  }

  
  if (w1024) {
    SIZE = formPageTitle1024;
  }
  if (w768) {
    SIZE = formPageTitle768;
  }
  console.log("w768", w768);
  console.log("w1024", w1024);
  console.log("w1200", w1200);

  return (
    <Typography variant="h1" maxWidth="lg" sx={SIZE}>
      {title}
    </Typography>
  );
};

export default FormPageTitles;

import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { formPageTitleNorm, formPageTitle768,formPageTitle1024 } from "../styles/stylesMUI";

type Props = {
  title: string;
};

const FormPageTitles: React.FC<Props> = ({ title }) => {
  const w768 = useMediaQuery("(max-width:768px)");
  const w1024 = useMediaQuery("(max-width:1024x)");

  let SIZE;

  // if(w768){SIZE=formPageTitle768}else if(w1024){SIZE=formPageTitle1024}else{SIZE=formPageTitleNorm}

  if(w1024){SIZE=formPageTitle1024}
 if(w768){SIZE=formPageTitle768}

  if(!w768&&!w1024){SIZE=formPageTitleNorm}


  return (
    <Typography variant="h1" maxWidth="lg" sx={SIZE}>
      {title}
    </Typography>
  );
};

export default FormPageTitles;

//{`${title} ${w768}`}

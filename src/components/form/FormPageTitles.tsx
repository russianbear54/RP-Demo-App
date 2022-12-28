import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { formPageTitleNorm, formPageTitle768, formPageTitle1024, formPageTitleiPhoneProMax12, formPageTitle1200 } from "../../styles/stylesMUI";

type Props = {
  title: string;
};

const FormPageTitles: React.FC<Props> = ({ title }) => {
  const w428 = useMediaQuery("(max-width:428px)");
  const w768 = useMediaQuery("(max-width:768px)");
  const w1024 = useMediaQuery("(max-width:1024px)");
  const w1200 = useMediaQuery("(max-width:1200px)");

  let SIZE = formPageTitleNorm;

  if (w1200) {
    SIZE = formPageTitle1200;
  }

  if (w1024) {
    SIZE = formPageTitle1024;
  }
  if (w768) {
    SIZE = formPageTitle768;
  }

  if (w428) {
    SIZE = formPageTitleiPhoneProMax12;
  }

  return (
    <Typography variant="h1" maxWidth="lg" sx={SIZE}>
      {title}
    </Typography>
  );
};

export default FormPageTitles;

import React from "react";
import { Typography, Container } from "@material-ui/core";
import { Helmet } from "react-helmet";
import moment from "moment";

export const About = () => {
  return (
    <Container fixed>
      <Helmet>
        <title>About | {moment().format()} </title>
      </Helmet>
      <Typography variant="body1">About</Typography>
    </Container>
  );
};

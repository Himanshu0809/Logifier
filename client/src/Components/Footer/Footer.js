import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";
import { FooterContent } from './Footer.styles.js';

function Footer() {
  return (
    <AppBar position="relative" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            <FooterContent>© 2021 Logifier by Ritesh & Himanshu. All Rights Reserved</FooterContent>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;

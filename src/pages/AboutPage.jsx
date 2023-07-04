import { Container, Grid } from "@mui/material";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center">
        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
          We are excited to introduce our innovative project focused on personalized business cards. Our mission is to revolutionize the way businesses promote themselves and connect with their clients and contacts.<br/>

          In today's competitive market, a business card is no longer just a piece of paper with contact information. It has the potential to be a powerful tool that represents your brand and leaves a lasting impression. With our project, we aim to provide a unique and creative solution that helps businesses stand out from the crowd.
          <br/>
          To use this website all you need to do is login and all your cards will shown up as ypur permissions allows you. 
          </p>
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src="\assets\images\business-card-top-image.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}

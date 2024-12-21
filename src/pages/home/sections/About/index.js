// @mui material components
import {Container, Grid}from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import bgImage from "assets/images/christian2.png";

function AboutUs() {

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" fontSize="1em" color="white" fontWeight="bold">
            What CCLabs is?
          </MKTypography>
          <MKTypography variant="h1" fontSize="1.5em" color="white" mb={1}>
            More than just a platform
          </MKTypography>
          <MKTypography variant="body1" fontSize="0.8em" color="white" opacity={0.8} mb={2}>
            It is a vibrant ecosystem where Christian creatives fellowship, connect, share ideas,
            and bring faith-driven visionary projects to life. Our ecosystem is all about
            networking, knowledge sharing, and building scalable faith-based applications.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutUs;

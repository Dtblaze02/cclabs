// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

//  React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0 }}>
      <MKBox variant="gradient" bgColor="dark" position="relative" sx={{ overflow: "hidden" }}>
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Join the movement! Sign up today
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              And start connecting, collaborating and creating!
            </MKTypography>
            <Grid container justifyContent="center">
              <MKButton
                variant="gradient"
                color="secondary"
                size="large"
                component="a"
                target="_blank"
                href="https://forms.gle/JsFytdkjrZKPpZm38"
                sx={{ mb: 2 }}
              >
                Signup Now
              </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;

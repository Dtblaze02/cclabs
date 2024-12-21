import {Container, Grid, Card} from "@mui/material";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import Information from "./sections/Information";
import Download from "pages/home/sections/Download";
import About from "./sections/About";
import { key_features } from "data";
import routes from "routes";

// Images
import bgImage from "assets/images/christian.jpg";
import { Box, CardContent, Fade, Icon, Typography } from "@mui/material";
import MKButton from "components/MKButton";

function Presentation() {
  const date = new Date().getFullYear();
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://forms.gle/JsFytdkjrZKPpZm38",
          label: "Signup Now",
          color: "secondary",
        }}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container id="home">
          <Grid
            container
            item
            xs={12}
            lg={8}
            pb={{ xs: 12, lg: 20 }}
            pt={{ xs: 12, lg: 20 }}
            justifyContent="center"
            mx="auto"
          >
            <Fade in={true} timeout={1500}>
              <MKTypography
                variant="h1"
                color="white"
                mb={1}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["3xl"],
                  },
                })}
              >
                Welcome to CCLabs{" "}
              </MKTypography>
            </Fade>
            <p style={{ fontSize: "14px", color: "white", textAlign: "center" }}>
              &quot;Connect, Collaborate, Create&quot; ...impacting lives with faith-driven
              innovations
            </p>
            <Fade in={true} timeout={1500}>
              <MKTypography
                variant="body1"
                color="white"
                textAlign="center"
                px={{ xs: 1, lg: 2 }}
                mt={2}
              >
                Join the premier community for Christian Creatives, Innovators and entrepreneurs
                Collaborate, learn and grow with like-minded Believers passionate about advancing
                the Gospel of Jesus Christ through technology and media
              </MKTypography>
            </Fade>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <MKButton
                variant="gradient"
                color="secondary"
                size="large"
                component="a"
                target="_blank"
                href="https://forms.gle/JsFytdkjrZKPpZm38"
              >
                Join The Community
              </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: { xs: 4, lg: 8 },
          mx: { xs: 1, lg: 2 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container id="about">
          {/* What CCLabs is */}
          <About />
        </Container>
        {/* Key Features */}

        <Box sx={{ textAlign: "center", m: 4 }} id="features">
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: 2,
              position: "relative",
            }}
            id="features"
          >
            Key Features
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "50px",
                height: "3px",
                backgroundColor: "secondary.main",
              }}
            />
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={3}>
            {key_features.map((item) => (
              <Grid item xs={12} lg={4} key={item.id}>
                <Card
                  sx={{
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <CardContent>
                    <Icon>{item.icon}</Icon>
                    <Typography variant="h6" color="primary" fontSize="0.8em">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" fontSize="0.6em">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Card>
      {/* Benefits */}
      <Container  id="benefits">
        <Information/>
      </Container>
      {/* Call to action */}
      <Download />
      <MKBox component="footer" style={{ backgroundColor: "black" }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ textAlign: "center", mb: 1 }}>
              <MKTypography variant="button" color="info.main" fontWeight="regular">
                All rights reserved. Copyright &copy; {date} CCLabs{" "}
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Presentation;

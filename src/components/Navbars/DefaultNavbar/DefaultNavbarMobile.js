import { useState } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import { Link as ScrollLink } from 'react-scroll';

//  React components
import MKBox from "../../MKBox";
import MKTypography from "../../MKTypography";

function DefaultNavbarMobile({ routes, open }) {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
          {routes.map((route)=>{
            return (
              <MKBox
                mx={1}
                p={1}
                key={route.id}
                display="flex"
                alignItems="baseline"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                <MKTypography
                  variant="body2"
                  lineHeight={1}
                  color="inherit"
                  sx={{ alignSelf: "center", "& *": { verticalAlign: "middle" } }}
                >
                  {route.icon}
                </MKTypography>
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  textTransform="capitalize"
                  sx={{ fontWeight: "100%", ml: 1, mr: 0.25 }}
                  className={activeSection === `${route.route}` ? 'active' : ''}
                >
                  <ScrollLink to={route.route} smooth={true} duration={500} onClick={() => handleSectionChange(`${route.route}`)}>
                    {route.name}
                  </ScrollLink>
                </MKTypography>
              </MKBox>
            )
          })}
      </MKBox>
    </Collapse>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;

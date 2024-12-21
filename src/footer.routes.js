import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "CCLabs",
    route: "home",
  },
  copyright: (
    <MKTypography variant="button" color="white" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} CCLabs{" "}
    </MKTypography>
  ),
};

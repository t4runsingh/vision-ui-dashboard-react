// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "Name", align: "left" },
      { name: "members", align: "left" },
      { name: "Date", align: "center" },
      { name: "Safety", align: "center" },
    ],

    rows: [
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            {/* <AdobeXD size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Test Person 1
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar2, "Romina Hadid"],
              [avatar3, "Alexander Smith"],
              [avatar4, "Jessica Doe"],
            ])}
          </VuiBox>
        ),
        Date: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            Aug 1,2022
          </VuiTypography>
        ),
        Safety: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              60%
            </VuiTypography>
            <VuiProgress value={60} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            {/* <Atlassian size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Test Person 2
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar2, "Romina Hadid"],
              [avatar4, "Jessica Doe"],
            ])}
          </VuiBox>
        ),
        Date: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            Aug 1,2022
          </VuiTypography>
        ),
        Safety: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              10%
            </VuiTypography>
            <VuiProgress value={10} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            {/* <Slack size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Test Person 3
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar3, "Alexander Smith"],
            ])}
          </VuiBox>
        ),
        Date: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            Aug 1,2022
          </VuiTypography>
        ),
        Safety: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            {/* <Spotify size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Test Person 4
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar4, "Jessica Doe"],
              [avatar3, "Alexander Smith"],
              [avatar2, "Romina Hadid"],
              [avatar1, "Ryan Tompson"],
            ])}
          </VuiBox>
        ),
        Date: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            Aug 1,2022
          </VuiTypography>
        ),
        Safety: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            {/* <Jira size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Test Person 5
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([[avatar4, "Jessica Doe"]])}
          </VuiBox>
        ),
        Date: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            Aug 1,2022
          </VuiTypography>
        ),
        Safety: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              25%
            </VuiTypography>
            <VuiProgress value={25} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Name: (
          <VuiBox display="flex" alignItems="center">
            {/* <Invision size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Test Person 6
            </VuiTypography>
          </VuiBox>
        ),
        members: (
          <VuiBox display="flex" py={1}>
            {avatars([
              [avatar1, "Ryan Tompson"],
              [avatar4, "Jessica Doe"],
            ])}
          </VuiBox>
        ),
        Date: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            Aug 1,2022
          </VuiTypography>
        ),
        Safety: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              40%
            </VuiTypography>
            <VuiProgress value={40} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
    ],
  };
}

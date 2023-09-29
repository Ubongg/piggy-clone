import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const AboutSafelock = ({ toggleAboutSafelockDrawer, anchor }) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleAboutSafelockDrawer(anchor, false)}
      onKeyDown={toggleAboutSafelockDrawer(anchor, false)}
    >
      <List>
        {["Safelock", "About", "Send email", "Safelock"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default AboutSafelock;

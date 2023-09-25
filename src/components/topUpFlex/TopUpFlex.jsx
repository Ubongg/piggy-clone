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

const TopUpFlex = ({ toggleDrawer3, anchor }) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer3(anchor, false)}
      onKeyDown={toggleDrawer3(anchor, false)}
    >
      <List>
        {["TopUpFlex", "About", "Send email", "TopUpFlex"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
};
export default TopUpFlex;

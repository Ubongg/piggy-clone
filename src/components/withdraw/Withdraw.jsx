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

const Withdraw = ({ toggleDrawer2, anchor }) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer2(anchor, false)}
      onKeyDown={toggleDrawer2(anchor, false)}
    >
      <List>
        {["Withdraw", "About", "Send email", "Withdraw"].map((text, index) => (
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
export default Withdraw;

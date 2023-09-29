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

const Activities = ({ toggleActivitiesDrawer, anchor }) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleActivitiesDrawer(anchor, false)}
      onKeyDown={toggleActivitiesDrawer(anchor, false)}
    >
      <List>
        {["Activities", "Starred", "Send email", "Drafts"].map(
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
export default Activities;

import * as React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Sign/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to sign-in page after logout
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))} */}

        <h1
          style={{
            color: "#181D3D",
            fontWeight: "bold",
            marginLeft: "20px",
            marginBottom: "10px",
          }}
        >
          {" "}
          MEDDAWI{" "}
        </h1>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon sx={{ color: "#181D3D" }} />
            </ListItemIcon>
            <Link to="/home">
              {" "}
              <ListItemText
                sx={{ color: "#181D3D" }}
                primary={"الصفحه الرئيسية"}
              />{" "}
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <TaskAltIcon sx={{ color: "#181D3D" }} />
            </ListItemIcon>
            <Link to="/askservice">
              {" "}
              <ListItemText
                sx={{ color: "#181D3D" }}
                primary={"عناية مستمرة  "}
              />{" "}
            </Link>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MedicalInformationIcon sx={{ color: "#181D3D" }} />
            </ListItemIcon>
            <Link to="/service">
              {" "}
              <ListItemText sx={{ color: "#181D3D" }} primary={"الخدمات"} />
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Diversity3Icon sx={{ color: "#181D3D" }} />
            </ListItemIcon>
            <Link to="/team1">
              {" "}
              <ListItemText sx={{ color: "#181D3D" }} primary={"الفريق"} />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {currentUser ? (
          <>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonIcon sx={{ color: "#181D3D" }} />
                </ListItemIcon>
                <Link to="/profile">
                  <ListItemText sx={{ color: "#181D3D" }} primary="البروفايل" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={handleLogout}>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: "#181D3D" }} />
                </ListItemIcon>
                <ListItemText sx={{ color: "#181D3D" }} primary="تسجيل خروج" />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LoginIcon sx={{ color: "#181D3D" }} />
              </ListItemIcon>
              <Link to="/signup">
                <ListItemText sx={{ color: "#181D3D" }} primary="تسجيل دخول" />
              </Link>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div className="Navbar">
      {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))} */}

      <MenuIcon
        sx={{ color: "#181D3D", width: "10%", height: "10%" }}
        onClick={toggleDrawer("left", true)}
      />

      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};

export default Navbar;

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
import GTranslateIcon from '@mui/icons-material/GTranslate';import LogoutIcon from "@mui/icons-material/Logout";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import InfoIcon from "@mui/icons-material/Info";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to sign-in page after logout
  };
  const toggleArEn = () => {
    const newlanguage = i18n.language == "en" ? "ar" : "en";
    i18n.changeLanguage(newlanguage);
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
    <>
      <div className=" mt-0 bg-blue-950">
        <MenuOpenIcon className="ml-3 mb-3 mt-3 w-28 text-white " />
      </div>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: "#181D3D" }} />
              </ListItemIcon>
              <Link to="/">
                {" "}
                <ListItemText
                  sx={{ color: "#181D3D" }}
                  primary={t("Home")}
                />{" "}
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon sx={{ color: "#181D3D" }} />
              </ListItemIcon>
              <Link to="/aboutUs">
                {" "}
                <ListItemText
                  sx={{ color: "#181D3D" }}
                  primary={t("About")}
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
                  primary={t("Ongoing Care")}
                />{" "}
              </Link>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MedicalInformationIcon sx={{ color: "#181D3D" }} />
              </ListItemIcon>
              <Link to="/services">
                {" "}
                <ListItemText
                  sx={{ color: "#181D3D" }}
                  primary={t("Services")}
                />
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
                <ListItemText sx={{ color: "#181D3D" }} primary={t("Team")} />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />


        
<ListItem disablePadding>
            <ListItemButton  onClick={toggleArEn}>
              <ListItemIcon>
                <GTranslateIcon sx={{ color: "#181D3D" }} />
              </ListItemIcon>
            
                {" "}
                <ListItemText
                  sx={{ color: "#181D3D" }}
                  primary=
                  {i18n.language === "en" ? t("Arabic") : t("English")}

                />{" "}
            
            </ListItemButton>
          </ListItem>
          
        <List>

          {currentUser ? (
            <>
              <ListItem disablePadding onClick={handleLogout}>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: "#181D3D" }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ color: "#181D3D" }}
                    primary={t("Logout")}
                  />
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
                  <ListItemText
                    sx={{ color: "#181D3D" }}
                    primary={t("Login")}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          )}


         
        </List>
      </Box>
    </>
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
      <div></div>
      <MenuIcon
        className="ml-3 mt-3  text-white"
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

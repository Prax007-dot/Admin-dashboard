import React from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "../components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../state/index.js";
import profileImage from "../assets/profile.jpeg";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  Icon,
} from "@mui/material";
import { borderColor } from "@mui/system";
import User from "../../../server/models/User";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, user }) => {
  const dispatch = useDispatch(); //instance of dispatch function this instance is a function to change variable
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Add your logout logic here
    // For example: redirect the user to the login page, clear authentication tokens, etc.
  };

  const handleProfile = () => {};

  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const bg = theme.palette.background.alt;
  return (
    <>
      {/* Everything jsx */}
      <AppBar
        sx={{
          position: "static",
          background: "none",
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <FlexBetween sx={{ gap: "1rem" }}>
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <MenuIcon />
            </IconButton>

            <FlexBetween
              sx={{
                backgroundColor: bg,
                borderRadius: "9px",
                gap: "3rem",
                padding: "0.1rem 1.5rem",
              }}
            >
              <InputBase placeholder="Search..." />

              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
          </FlexBetween>
          {/* Right side */}
          <FlexBetween gap={"0.5rem"}>
            <IconButton onClick={() => dispatch(setMode(theme))}>
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined sx={{ fontSize: "25px" }} />
              ) : (
                <LightModeOutlined sx={{ fontSize: "25px" }} />
              )}
            </IconButton>
            <IconButton onClick={() => alert("settings display on/off")}>
              <SettingsOutlined />
            </IconButton>
            {/* profile Box */}
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              {/* image */}
              <Box
                component={"img"}
                src={profileImage}
                height={"40px"}
                width={"40px"}
                borderRadius={"50%"}
                alt={"profile Image"}
              ></Box>
              {/* username and occupation */}
              <Box textAlign={"left"}>
                <Typography
                  fontWeight={"bold"}
                  fontSize={"0.85rem"}
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontWeight={"bold"}
                  fontSize={"0.85rem"}
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <ArrowDropDownOutlined sx={{ color: "white" }} />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
               onClick={handleProfile}
              >Profile</MenuItem>
              <MenuItem
               onClick={handleProfile}
              >Logout</MenuItem>
            </Menu>
          </FlexBetween>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

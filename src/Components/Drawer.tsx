import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import Logout from "./Logout";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer(props: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openDropDown, setOpenDropDown] = React.useState(false);
  const [openTricks, setOpenTricks] = React.useState(false);

  const [selectedIndexDropdown, setSelectedIndexDropdown] = React.useState<
    number | null
  >(null);
  const [selectedIndexTricks, setSelectedIndexTricks] = React.useState<
    number | null
  >(null);
  const [selectedIndexFooter, setSelectedIndexFooter] = React.useState<
    number | null
  >(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpenDropDown(!openDropDown);
  };
  const handleClickTricks = () => {
    setOpenTricks(!openTricks);
  };
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    props.setSelectedIndex(index);
    setSelectedIndexDropdown(null);
    setSelectedIndexFooter(null);
    setSelectedIndexTricks(null);
  };

  const handleDropdownClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndexDropdown(index);
    props.setSelectedIndex(1);
    setSelectedIndexTricks(null);
    setSelectedIndexFooter(null);
  };

  const handleDropdownTricks = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndexTricks(index);
    props.setSelectedIndex(2);
    setSelectedIndexDropdown(null);
    setSelectedIndexFooter(null);
  };

  const handleFooterClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndexFooter(index);
    props.setSelectedIndex(null);
    setSelectedIndexDropdown(null);
    setSelectedIndexTricks(null);
  };

  return (
    <>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <Toolbar sx={{ backgroundColor: "#303030" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: "#d6d6d6",
              marginRight: 5,
              "&:hover": {
                color: "#f9c712",
              },
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <Logout />
          <IconButton
            sx={{
              color: "#d6d6d6",
              marginLeft: "8rem",
              "&:hover": {
                color: "#f9c712",
              },
            }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </Toolbar>
        <Divider variant="middle" />
        <List
          sx={{
            backgroundColor: "#303030",
            color: "#d6d6d6",
            height: "100%",
            pt: "20px",
          }}
        >
          {["Home", "Challenges", "Submitted Tricks", "Leaderboard"].map(
            (text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "block",
                  color: "#d6d6d6",
                  padding: "5px",
                  "& .Mui-selected": {
                    backgroundColor: "#f9c712 !important",
                    color: "#303030",
                    borderRadius: "10px",
                  },
                }}
              >
                <ListItemButton
                  selected={props.selectedIndex === index}
                  onClick={(event) => handleListItemClick(event, index)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    color: "#d6d6d6",
                    borderRadius: "10px",
                    backgroundColor: "#2d2c2c",
                    height: "0.5rem",
                    ...(open && { marginLeft: "6px", marginRight: "6px" }),

                    "&:hover": {
                      backgroundColor: "#f9c712",
                      color: "#303030",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                      color: "#d6d6d6",
                      ...(props.selectedIndex === index && {
                        color: "#303030",
                      }),
                    }}
                  >
                    {index === 0 ? (
                      <AddHomeOutlinedIcon />
                    ) : index === 1 ? (
                      <LeaderboardOutlinedIcon />
                    ) : index === 2 ? (
                      <PlayCircleOutlineIcon />
                    ) : (
                      <EmojiEventsOutlinedIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                  {index === 1 && (
                    <>
                      {open && (
                        <>
                          {openDropDown ? (
                            <ExpandLess
                              onClick={() => {
                                {
                                  index === 1 && handleClick();
                                }
                              }}
                            />
                          ) : (
                            <ExpandMore
                              onClick={() => {
                                {
                                  index === 1 && handleClick();
                                }
                              }}
                            />
                          )}
                        </>
                      )}
                    </>
                  )}
                  {index === 2 && (
                    <>
                      {open && (
                        <>
                          {openTricks ? (
                            <ExpandLess
                              onClick={() => {
                                {
                                  index === 2 && handleClickTricks();
                                }
                              }}
                            />
                          ) : (
                            <ExpandMore
                              onClick={() => {
                                {
                                  index === 2 && handleClickTricks();
                                }
                              }}
                            />
                          )}
                        </>
                      )}
                    </>
                  )}
                </ListItemButton>

                {index === 1 && (
                  <>
                    {open && (
                      <>
                        {" "}
                        <Collapse
                          in={openDropDown}
                          timeout="auto"
                          unmountOnExit
                        >
                          <List component="div" disablePadding>
                            {["Past", "Current", "Upcoming"].map(
                              (text, index) => (
                                <ListItemButton
                                  selected={selectedIndexDropdown === index}
                                  onClick={(event) =>
                                    handleDropdownClick(event, index)
                                  }
                                  sx={{
                                    pl: 4,
                                    color: "#d6d6d6",
                                    backgroundColor: "#303030",
                                    ml: "6px",
                                    mr: "6px",
                                    mt: "5px",
                                    mb: "5px",
                                    "&:hover": {
                                      color: "#303030",
                                      backgroundColor: "#f9c712",
                                      borderRadius: "10px",
                                    },
                                  }}
                                >
                                  <ListItemText primary={text} />
                                </ListItemButton>
                              )
                            )}
                          </List>
                        </Collapse>
                      </>
                    )}
                  </>
                )}
                {index === 2 && (
                  <>
                    {open && (
                      <>
                        {" "}
                        <Collapse in={openTricks} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding>
                            {["Recently"].map((text, index) => (
                              <ListItemButton
                                selected={selectedIndexTricks === index}
                                onClick={(event) =>
                                  handleDropdownTricks(event, index)
                                }
                                sx={{
                                  pl: 4,
                                  color: "#d6d6d6",
                                  backgroundColor: "#303030",
                                  ml: "6px",
                                  mr: "6px",
                                  mt: "5px",
                                  mb: "5px",
                                  "&:hover": {
                                    color: "#303030",
                                    backgroundColor: "#f9c712",
                                    borderRadius: "10px",
                                  },
                                }}
                              >
                                <ListItemText primary={text} />
                              </ListItemButton>
                            ))}
                          </List>
                        </Collapse>
                      </>
                    )}
                  </>
                )}
              </ListItem>
            )
          )}
        </List>
        {!open && (
          <Box sx={{ backgroundColor: "#303030", padding: "8px" }}>
            {" "}
            <Logout />
          </Box>
        )}

        {open && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#303030",
                width: "100%",
              }}
            >
              <List
                sx={{
                  backgroundColor: "#2d2c2c",
                  color: "#d6d6d6",
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "1rem",
                  marginBottom: "1rem",
                  height: "4rem",
                  width: "13rem",
                  paddingLeft: "12px",
                  borderRadius: "10px",
                }}
              >
                {["Settings", "Notifications", "Messages"].map(
                  (text, index) => (
                    <ListItem
                      disablePadding
                      sx={{
                        display: "block",
                        color: "#d6d6d6",
                        paddingBottom: "6px",
                        paddingRight: "6px",
                        "& .Mui-selected": {
                          backgroundColor: "#f9c712 !important",
                          color: "#303030",
                          borderRadius: "10px",
                        },
                      }}
                    >
                      <ListItemButton
                        selected={selectedIndexFooter === index}
                        onClick={(event) => handleFooterClick(event, index)}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          color: "#d6d6d6",
                          borderRadius: "10px",
                          backgroundColor: "#2d2c2c",
                          padding: "4px",
                          marginLeft: "6px",
                          marginRight: "6px",

                          "&:hover": {
                            backgroundColor: "#f9c712",
                            color: "#303030",
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            paddingLeft: "5px",
                            justifyContent: "center",
                            color: "#d6d6d6",
                            ...(selectedIndexFooter === index && {
                              color: "#303030",
                            }),
                          }}
                        >
                          {index === 0 ? (
                            <SettingsOutlinedIcon
                              sx={{ padding: "1px", ml: "3px" }}
                            />
                          ) : index === 1 ? (
                            <NotificationsNoneOutlinedIcon
                              sx={{ padding: "1px", ml: "3px" }}
                            />
                          ) : (
                            <ForumOutlinedIcon
                              sx={{ padding: "1px", ml: "3px" }}
                            />
                          )}
                        </ListItemIcon>
                      </ListItemButton>
                    </ListItem>
                  )
                )}
              </List>
            </Box>
          </>
        )}
      </Drawer>
    </>
  );
}

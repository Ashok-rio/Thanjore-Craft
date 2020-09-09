import React from "react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";
import { BsFillBagFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { makeStyles, fade } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./header.css";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#0063B1",
  },
  button: {
    color: "white",
    marginRight: "2%",
  },
  buttonMyOrder: {
    color: "white",
    marginRight: "2%",
  },
  title: {
    flex: 1,
    textAlign: "left",
  },
  navImg: {
    marginRight: "2%",
  },

  search: {
    position: "relative",
    marginRight: "5%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Nav = (props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.background} position="static">
      <Toolbar>
        <Avatar
          alt="Remy Sharp"
          src={"https://bit.ly/3gpd51r"}
          className={classes.navImg}
        />

        <Typography variant="h5" className={classes.title}>
          Thanjore Craft
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Toolbar>
          {" "}
          <Button
            className={classes.button}
            onClick={() => (window.location = "/profile")}
          >
            <AccountCircleIcon />
          </Button>
          <Button
            disableRipple
            className={classes.buttonMyOrder}
            onClick={() => (window.location = "/orders")}
          >
            <BsFillBagFill size={"1.5rem"} />
            &nbsp;&nbsp;
          </Button>
          <Button className={classes.buttonMyOrder}>
            <FiLogOut
              size={"1.5rem"}
              onClick={() => {
                localStorage.removeItem("usertoken");
                if (!localStorage.usertoken) {
                  return (window.location = "/login");
                } else {
                  alert("hello");
                }
              }}
            />
            &nbsp;&nbsp;
          </Button>
        </Toolbar>
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

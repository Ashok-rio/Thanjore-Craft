import React, { useState ,useEffect} from "react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";

import { makeStyles, fade } from "@material-ui/core/styles";

import NavIcon from "../../img/NavIcon.png";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import OrderIcon from "../../img/Vector.png";
import "./header.css";
import { Login, Register } from "../User/index";
import { getUserData } from "../../service/ApiService";
import { toast } from "react-toastify";


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
    // vertical padding + font size from searchIcon
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

toast.configure();

const toastOptions = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true
}

const Nav = (props) => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const classes = useStyles();
  const [user, setUser] = useState({ admin: '' })

  
  useEffect(() => {
    async function fetchData() {
      try {
        let result;
      result = await getUserData()
      if (result.success) {
          setUser(result.user)
          toast.success(result.message, toastOptions);
      }
      else {
          toast.error(result.error, toastOptions);
          setLogin(true)
          if (result.error.includes("Unauthorized")) {
              window.history.push('/admin/login');
          }
          return console.log(result.error);
      }
      } catch (e) {
        
      }
    }
    fetchData();
  }, [])
  
  // const moveOn=()=>{
  //   props.history.push('/user/profile')
  // }
    return (
      <AppBar className={classes.background} position="static">
        <Toolbar>
          <Avatar alt="Remy Sharp" src={NavIcon} className={classes.navImg} />

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
          {!localStorage.usertoken ? (
            <Button
              className={classes.button}
              onClick={() => {
                // window.location = '/login'
                setLogin(!login);
              }}
            >
              Login
            </Button>
          ) : (
              <Toolbar>
                {" "}
                <Button className={classes.button} onClick={()=> window.location = '/user/profile'}>
                  <AccountCircleIcon /> {user.name}
            </Button>
                <Button disableRipple className={classes.buttonMyOrder}onClick={() => window.location = '/order'} >
                  <a href={'/'}>
                  <img src={OrderIcon}  className={"ordericon-navbar"} alt={""} /></a>
              MyOrders
            </Button>
              </Toolbar>
            )}

          <Button className={classes.button}>
            <ShoppingCartOutlinedIcon />
          Cart
        </Button>
        </Toolbar>
        {login === true ? (
          <Login
            value={true}
            click={() => {
              setLogin(!login);
              setRegister(!register);
            }}
          />
        ) : null}
        {register === true ? <Register value={true} click={() => {
          setRegister(!register);
          setLogin(!login);
        }} /> : null}
      </AppBar>
    );
  };

  export default Nav;

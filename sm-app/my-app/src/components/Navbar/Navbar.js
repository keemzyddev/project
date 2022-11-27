import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Button, Typography, Avatar, Toolbar } from "@mui/material";
import { useDispatch } from "react-redux";
import decode from 'jwt-decode'
import memories from "../../images/cat.jpg";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const location = useLocation()

  const logout = () => {
    dispatch({ type: 'LOGOUT' })

    navigate('/')

    setUser(null)
  };

  useEffect(() => {
    const token = user?.token;

    if(token) {
      const decodedToken = decode(token)

      if(decodedToken.exp * 1000 < new Date().getTime()) logout()
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [user?.token, location]);

  return (
    <AppBar className={classes.appBar} position="relative" color="inherit">
      <div className={classes.brandContainer}>
        <Typography className={classes.heading} variant="h2">
          <Link to="/"> Memories </Link>
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="50"
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button variant="contained" color="primary">
            <Link to="/auth"> Signin </Link>{" "}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

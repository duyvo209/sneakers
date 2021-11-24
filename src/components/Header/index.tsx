import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Popover,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";
import Cart from "../../assets/images/icon-cart.svg";
import Avatar from "../../assets/images/image-avatar.png";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeCart } from "../../features/cart/cartSlide";
import productOne from "../../assets/images/image-product-1-thumbnail.jpg";
import deleteCart from "../../assets/images/icon-delete.svg";

Header.propTypes = {};

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "white !important",
    width: "100% !important",
  },
  box: {
    width: "1250px",
  },
  toolbar: {
    width: "100%",
    height: "100px",
    borderBottom: "1px solid #0000001a",
  },
  title: {
    color: "#000",
  },
  logo: {},
  menu_left: {
    display: "flex",
    flexGrow: 1,
    margin: "0 15px",
  },
  menu_right: {
    display: "contents",
  },
  link: {
    color: "#000",
    textDecoration: "none",
    margin: "0 15px",
  },
  menu_item: {
    fontSize: "14px !important",
    color: "#68707d",
    padding: "38px 0",
    "&:hover": { borderBottom: "3px solid #ff7d1a", color: "#000" },
  },
  cart_icon: {
    width: "40px",
    height: "40px",
  },
  avatar: {
    width: "38px",
    height: "38px",
    "&:hover": { background: "ff7d1a" },
  },
  popupCart: {},
}));

function Header(props: any) {
  const classes = useStyles();

  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleDelete = (id: number): void => {
    dispatch(removeCart(id));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <AppBar className={classes.header}>
        <Box className={classes.box}>
          <Toolbar className={classes.toolbar}>
            <Box className={classes.logo}>
              <img src={Logo} alt="Logo" />
            </Box>
            <Box className={classes.menu_left}>
              <NavLink className={classes.link} to="/collections">
                <Typography className={classes.menu_item}>
                  Collections
                </Typography>
              </NavLink>
              <NavLink className={classes.link} to="/men">
                <Typography className={classes.menu_item}>Men</Typography>
              </NavLink>
              <NavLink className={classes.link} to="/women">
                <Typography className={classes.menu_item}>Women</Typography>
              </NavLink>
              <NavLink className={classes.link} to="/about">
                <Typography className={classes.menu_item}>About</Typography>
              </NavLink>
              <NavLink className={classes.link} to="/contact">
                <Typography className={classes.menu_item}>Contact</Typography>
              </NavLink>
            </Box>
            <Box className={classes.menu_right}>
              <Box style={{ margin: "0 20px" }} onClick={handleClick}>
                <img src={Cart} alt="" />
                {cart.map((cart) => (
                  <span
                    style={{
                      display: "inline-block",
                      transform: "translateY(-5px) translateX(-10px)",
                      background: "#ff7d1a",
                      padding: "0px 5px",
                      fontSize: "11px",
                      position: "absolute",
                      borderRadius: "4px",
                      color: "#fff",
                    }}
                  >
                    {cart.quantity}
                  </span>
                ))}
              </Box>
              <Box style={{ margin: "0 20px" }}>
                <img src={Avatar} alt="" className={classes.avatar} />
              </Box>
              <Popover
                style={{ top: "20px", borderRadius: "15px !important" }}
                className={classes.popupCart}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box
                  style={{ width: "300px", height: "auto", minHeight: "200px" }}
                >
                  <Typography style={{ fontWeight: "bold" }} sx={{ p: 2 }}>
                    Cart
                  </Typography>
                  <hr style={{ background: "#0000001a" }} />

                  {Object.keys(cart).length > 0 ? (
                    cart.map((cart) => (
                      <Box>
                        <Box
                          style={{
                            margin: "20px",
                            height: "48px",
                            display: "grid",
                            gridTemplateColumns: "20% 70% 10%",
                          }}
                        >
                          <img
                            style={{
                              width: "45px",
                              borderRadius: "5px",
                              display: "inline-block",
                            }}
                            src={productOne}
                            alt=""
                          />
                          <Box
                            style={{
                              height: "48px",
                              marginBottom: "30px",
                              display: "inline-block",
                            }}
                          >
                            <Typography
                              style={{
                                fontSize: "13px",
                              }}
                            >
                              {cart.name}
                            </Typography>
                            <Typography
                              style={{
                                fontSize: "13px",
                                display: "inline-block",
                              }}
                            >
                              ${cart.price}.00 x {cart.quantity}
                            </Typography>
                            <span
                              style={{
                                fontSize: "13px",
                                display: "inline-block",
                                marginLeft: "5px",
                                fontWeight: "bold",
                              }}
                            >
                              ${cart.price * cart.quantity}.00
                            </span>
                          </Box>
                          <Box>
                            <img
                              onClick={() => handleDelete(cart.id)}
                              style={{
                                width: "13px",
                                marginTop: "17px",
                                marginLeft: "6px",
                                cursor: "pointer",
                              }}
                              src={deleteCart}
                              alt=""
                            />
                          </Box>
                        </Box>
                        <Box
                          style={{ width: "100%", padding: "0 20px 20px 20px" }}
                        >
                          <Button
                            style={{
                              width: "100%",
                              height: "45px",
                              background: "#ff7d1a",
                              color: "#fff",
                              textTransform: "none",
                              fontSize: "13px",
                              borderRadius: "10px",
                            }}
                          >
                            Checkout
                          </Button>
                        </Box>
                      </Box>
                    ))
                  ) : (
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#68707d",
                        margin: "60px 0",
                        width: "100%",
                        textAlign: "center",
                      }}
                    >
                      your cart is empty.
                    </Typography>
                  )}
                </Box>
              </Popover>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </div>
  );
}

export default Header;

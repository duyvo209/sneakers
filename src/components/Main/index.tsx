import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography, Modal } from "@mui/material";
import { makeStyles } from "@mui/styles";
import productOne from "../../assets/images/image-product-1.jpg";
import productTwo from "../../assets/images/image-product-2.jpg";
import productThree from "../../assets/images/image-product-3.jpg";
import productFour from "../../assets/images/image-product-4.jpg";
import Minus from "../../assets/images/icon-minus.svg";
import Add from "../../assets/images/icon-plus.svg";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../features/cart/cartSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

Main.propTypes = {};

const useStyles = makeStyles((theme) => ({
  main: {
    width: "995px",
  },
  box: {
    width: "100%",
    height: "auto",
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gap: "0 5px",
    marginTop: "70px",
  },
  main_left: {},
  main_right: {},
  image_slider: {
    width: "350px",
  },
  image: {
    width: "350px",
    borderRadius: "15px",
  },
  selected_image: {
    width: "70px",
    height: "70px",
    borderRadius: "10px",
    margin: "15px 10px 20px 10px",
  },
  sneaker_company: {
    fontSize: "14px !important",
    color: "#ff7d1a",
    fontWeight: "700",
  },
  product_name: {
    marginTop: "25px !important",
    fontSize: "38px !important",
    fontWeight: "bold !important",
  },
  desc: {
    marginTop: "30px !important",
    fontSize: "15px !important",
    lineHeight: "25px !important",
    opacity: "65% !important",
  },
  price: {
    marginTop: "25px !important",
    fontSize: "25px !important",
    fontWeight: "bold !important",
    display: "inline-block",
  },
  price_old: {
    marginTop: "15px !important",
    marginBottom: "50px !important",
    fontSize: "15px !important",
    textDecoration: "line-through",
    opacity: "65% !important",
  },
  discount: {
    padding: "2px 6px !important",
    background: "#ffede0",
    fontSize: "14px !important",
    marginLeft: "15px !important",
    color: "#ff7d1a",
    borderRadius: "4px !important",
  },
  count: {
    display: "inline-block",
  },
  changeCount: {
    width: "12px important",
    height: "18px !important",
  },
  input: {
    border: "none",
    textAlign: "center",
    width: "80px",
    background: "none",
    color: "#000",
  },
  addToCart: {
    width: "250px !important",
    marginLeft: "20px !important",
    height: "50px !important",
    color: "#fff !important",
    background: "#ff7d1a !important",
    border: "none !important",
    borderRadius: "15px !important",
    cursor: "pointer !important",
    fontWeight: "700 !important",
    "&:hover": { opacity: "60%" },
  },
}));

const product = {
  id: 0,
  name: "Fall Limited Edition Sneakers",
  price: 125.0,
  desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  image: [productOne, productTwo, productThree, productFour],
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const image = [productOne, productTwo, productThree, productFour];

function Main(props: any) {
  const classes = useStyles();
  const [count, setCount] = React.useState(0);
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count != 0) {
      setCount(count - 1);
    }
  };

  const addCart = () => {
    const obj = {
      id: product.id,
      name: product.name,
      price: product.price,
      desc: product.desc,
      quantity: count,
      image: product.image,
    };
    dispatch(addToCart(obj));
    setCount(0);
  };

  const settings = {
    customPaging: function (i: any) {
      return (
        <div>
          <img
            src={image[i]}
            style={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots custom-indicator",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Box className={classes.main}>
        <Box className={classes.box}>
          <Box className={classes.main_left}>
            <Box className={classes.image_slider}>
              <Box>
                <Slider {...settings}>
                  <img
                    onClick={handleOpen}
                    src={productOne}
                    alt=""
                    className={classes.image}
                  />
                  <img
                    onClick={handleOpen}
                    src={productTwo}
                    alt=""
                    className={classes.image}
                  />
                  <img
                    onClick={handleOpen}
                    src={productThree}
                    alt=""
                    className={classes.image}
                  />
                  <img
                    onClick={handleOpen}
                    src={productFour}
                    alt=""
                    className={classes.image}
                  />
                </Slider>
              </Box>
            </Box>
          </Box>
          <Box className={classes.main_right}>
            <Typography className={classes.sneaker_company}>
              SNEAKER COMPANY
            </Typography>
            <Typography className={classes.product_name} variant="h2">
              Fall Limited Edition Sneakers
            </Typography>
            <Typography className={classes.desc}>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </Typography>
            <Typography variant="h4" className={classes.price}>
              $125.00
            </Typography>
            <span className={classes.discount}>50%</span>
            <Typography variant="h4" className={classes.price_old}>
              $250.00
            </Typography>
            <Box className={classes.count}>
              <Button
                onClick={minus}
                className={classes.changeCount}
                color="primary"
              >
                <img src={Minus} alt="" />
              </Button>
              <input
                className={classes.input}
                type="number"
                value={count}
                disabled
              />
              <Button onClick={add} className={classes.changeCount}>
                <img src={Add} alt="" />
              </Button>
            </Box>
            <Button onClick={addCart} className={classes.addToCart}>
              <Typography
                style={{
                  textTransform: "none",
                  fontSize: "15px",
                }}
              >
                Add to cart
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Slider {...settings}>
            <img src={productOne} alt="" className={classes.image} />
            <img src={productTwo} alt="" className={classes.image} />
            <img src={productThree} alt="" className={classes.image} />
            <img src={productFour} alt="" className={classes.image} />
          </Slider>
        </Box>
      </Modal>
    </div>
  );
}

export default Main;

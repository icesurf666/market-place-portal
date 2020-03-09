import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import { IProduct } from "react-app-env";
import useFetch from "hooks/useFetch";
import fetchProducts from "api/fetchProducts";
import {
  CardMedia,
  Grid,
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import noImage from "assets/noimage.png";

const useStyles = makeStyles({
  root: {
    width: 295,
    marginTop: 20,
    marginBottom: 30
  },
  cardAction: {
    height: 120
  }
});

interface IProps {
  product: IProduct;
}

const ProductSlider = ({ product }: IProps) => {
  const classes = useStyles();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    adaptiveHeight: true
  };

  return (
    <Grid>
      <Slider {...settings}>
        {product.gallery.map(logo => (
          <Card className={classes.root}>
            <CardMedia
              component="img"
              height="400"
              image={(logo && logo.src) || noImage}
            />
          </Card>
        ))}
      </Slider>
    </Grid>
  );
};
export default ProductSlider;

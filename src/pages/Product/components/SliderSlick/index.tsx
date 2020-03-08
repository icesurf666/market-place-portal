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
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 295,
    marginTop: 20,
    marginBottom: 30,
  },
  cardAction: {
    height: 120
  }
});
const SlickSlider = () => {
  const classes = useStyles();

  const { data, fetch } = useFetch(fetchProducts);

  useEffect(() => {
    fetch();
  }, []);

  if (!data) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <div>
          <h2>Возможно вас заинтересует </h2>
          <Slider {...settings}>
            {data.data.map((product: IProduct) => (
              <Card className={classes.root}>
                <CardActionArea component={Link} to={`/product/${product.id}`}>
                  <CardMedia
                    component="img"
                    height="230"
                    image={
                      (product.logo && product.logo.src) ||
                      "https://lh3.googleusercontent.com/proxy/swbWqEWmWU3Hr_FPIowwbja8kDQfDit38LUTfYUhb_m94lbdR_1ieoyvvlfMXqmRltfBz0LoNEn0NCJFaT7MMs9y7qt6aJWa_btmr5GKsWssigixrq8"
                    }
                  />
                  <CardContent className={classes.cardAction}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Slider>
        </div>
      </Grid>
    </Grid>
  );
};
export default SlickSlider;

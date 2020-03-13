import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Typography,
  Button,
  createStyles,
  makeStyles,
  Theme,
  Grid,
  IconButton,
  ListItem,
  Avatar,
  ListItemAvatar
} from "@material-ui/core";
import { IProduct, ICartItem, IUser } from "react-app-env";
import { useSelector } from "react-redux";
import { get, omit } from "lodash";
import useCart from "hooks/useCart";
import Rating from "@material-ui/lab/Rating";
import Availability from "./components/Availability";
import { useHistory, Redirect, Link } from "react-router-dom";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(2)
    },
    extendedIcon: {
      marginRight: theme.spacing(1)
    },
    wrap: {
      marginTop: 20,
      marginLeft: 50
    },
    avatar: {
      display: "flex",
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    textWrap: {
      marginLeft: 10,
      color: '#000000',
      textDecoration: 'none',
    },
    text: {
      color: '#000000',
      textDecoration: 'none',
    },
  })
);

interface IProps {
  product: IProduct;
}
const DescriptionCart = ({ product }: IProps) => {
  let history = useHistory()
  const isAuth: IUser = useSelector((store: any) => get(store, 'auth.isAuth', []))

  const classes = useStyles();
  const { addItem, items } = useCart();
  const Ids = items.map(item => item.product.id);
  const isInclude = Ids.includes(product.id);

  const item = { product, count: 1, id: product.id };
  const onAddCart = useCallback(() => {
    isAuth ?
    addItem(item) 
    : history.push('/auth');
  }, [item, items]);
  
  const buyNow = useCallback(async () => {
    if(isAuth) {
      addItem(item)
      history.push('/cart')
    } else {
      history.push('/auth')
    }
  }, [item, items]);

  return (
    <>
      <Grid container className={classes.wrap}>
        <Grid item xs={12}>
          <Typography variant="h4">{product.name}</Typography>
          <Link style={{textDecoration: 'none'}} to={`/shop/${product.shop.id}`} className={classes.avatar}>
            <Avatar src={product.shop && product.shop.logo && product.shop.logo.src} />
            <div className={classes.textWrap}>
              <Typography className={classes.text}>{product.shop.name}</Typography>
            </div>
          </Link>
          <Rating name="read-only" value={product.rating} readOnly />
          <div style={{ fontSize: 16 }}>Оценка товара: {product.rating} из 5</div>
          <Availability amount={product.amount} />
          <Typography gutterBottom variant="h6">
            {product.price}
            {product.currency.name}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Button onClick={buyNow} variant="contained" size="large" color="primary">
            Купить сейчас
          </Button>
          <Button
            onClick={onAddCart}
            variant="outlined"
            size="large"
            color="primary"
            className={classes.margin}
          >
            {isInclude ? `Добавить еще раз` : `Добавить в корзину`}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default DescriptionCart;

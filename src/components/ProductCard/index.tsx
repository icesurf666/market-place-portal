import React, { useCallback, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IProduct } from 'react-app-env';
import { Link } from 'react-router-dom';
import useCart from 'hooks/useCart';
import noImage from 'assets/noimage.png'

const useStyles = makeStyles({
  root: {
    width: 295,
    marginTop: 20,
  },
  card: {
    justifyContent: 'flex-end',
  },
  cardAction: {
    height: 120,
  },
  desc: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  title: {
    lineHeight: 1,
  }
});

interface IProductCard {
  product: IProduct,
}

const ProductCard = ({ product }: IProductCard) => {
  const classes = useStyles();
  const { addItem, items } = useCart()
  const item = { product, count: 1, id: product.id }
  const onAddCart = useCallback(() => {
    addItem(item)
  }, [item, items])
  
  return (
    <>
    <Card className={classes.root}>
      <CardActionArea  component={Link} to={`/product/${product.id}`}>
        <CardMedia
          component="img"
          height="230"
          image={product.logo && product.logo.src || noImage}
        />
        <CardContent className={classes.cardAction}>
          <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.card}>
        <Button onClick={onAddCart} size="small" color="primary">
          Добавить в корзину
        </Button>
      </CardActions>
    </Card>
    </>
  );
}

export default ProductCard
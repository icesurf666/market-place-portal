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
import uuid from 'uuid';

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
          image={`http://api.myeden.xyz/${product.logo}`}
        />
        <CardContent className={classes.cardAction}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
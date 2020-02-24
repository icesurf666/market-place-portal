import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IShop } from 'react-app-env';
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 345,
    marginTop: 20,
  },
  card: {
    justifyContent: 'flex-end',
  }
});

interface IShopProps {
  shop: IShop,
}
const ShopCard = ({shop}: IShopProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/shop/${shop.id}`}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="250"
          image={shop.logo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {shop.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {shop.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.card}>
        <Button size="small" color="primary">
          Перейти в магазин
        </Button>
      </CardActions>
    </Card>
  );
}

export default ShopCard
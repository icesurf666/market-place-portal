import React from 'react'
import { Typography, Button, createStyles, makeStyles, Theme, Grid, IconButton } from '@material-ui/core'
import { IProduct, ICartItem } from 'react-app-env';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { useSelector } from 'react-redux';
import { get, omit } from 'lodash';
import useCart from 'hooks/useCart';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(2),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }),
);

interface IProps {
  product: IProduct
}
const DescriptionCart = ({product}: IProps) => {
  
  const { items } = useCart()
  const classes = useStyles()
  const Ids = items.map((item) => item.product.id)
  const isInclude = Ids.includes(product.id)
  return (
    <>
    <Grid container>
      <Grid item xs={12}>
      <Typography variant="h3">{product.name}</Typography>
      <Typography gutterBottom variant="h6">{product.description}</Typography>
      <Typography gutterBottom variant="h6">{product.price}{product.currency.name}</Typography>
   
      </Grid>
      <Grid item xs={12}>
      <Button variant="contained" size="large" color="primary">
          Купить сейчас
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          {isInclude ? `Добавить еще раз` : `Добавить в корзину`}
        </Button>
        </Grid>
        </Grid>
    </>
  )
}

export default DescriptionCart
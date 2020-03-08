import React, { useEffect } from 'react';
import { Grid, Typography, makeStyles, CardMedia, Card } from '@material-ui/core';
import fetchShop from 'api/fetchShop';
import useFetch from 'hooks/useFetch';
import { IProduct } from 'react-app-env';
import ProductCard from 'components/ProductCard';
import { RouteComponentProps } from 'react-router-dom';

const useStyles = makeStyles({
  background: {
    maxWidth: '100%',
    height: 500,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  },
  title: {
    marginTop: 20,
  }
});

const Shop: React.FC<RouteComponentProps<{id: string}>> = ({ match, history, location }) => {
  const classes = useStyles();
  const { data, fetch } = useFetch(fetchShop)
  const id = Number(match.params.id)
  useEffect(() => {
    fetch(id)
  }, [fetch])

  if(!data) return null

  console.log(data.data.products)
  return (
    <>
    <Grid>
      <div className={classes.background}>
        <CardMedia image={data.data.logo.src} className={classes.background}/>
        </div>
      <Typography variant='h4' className={classes.title}>
        {data.data.name}
      </Typography>
      <Typography>
        {data.data.description}
      </Typography>
    </Grid>
  <Grid container spacing={1}>
    {data.data.products.map((product: IProduct) => {
      return (
      <Grid container item xs={3}>
        <ProductCard product={product} />
      </Grid>
      )
    })}
  </Grid>
  </>
  );
}

export default Shop


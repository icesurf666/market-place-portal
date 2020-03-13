import React, { useEffect } from 'react';
import { Grid, Typography, makeStyles, CardMedia, Card, Link } from '@material-ui/core';
import fetchShop from 'api/fetchShop';
import useFetch from 'hooks/useFetch';
import { IProduct } from 'react-app-env';
import ProductCard from 'components/ProductCard';
import { RouteComponentProps } from 'react-router-dom';
import noImage from 'assets/noimage.png'

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

  return (
    <>
    <Grid>
      <div className={classes.background}>
        <CardMedia image={data.data.logo && data.data.logo.src || noImage} className={classes.background}/>
        </div>
      <Typography variant='h4' className={classes.title}>
        {data.data.name}
      </Typography>
      <Typography>
        {data.data.description}
      </Typography>
      { data.data.contact &&
      <Typography style={{color: '#000'}} component={Link} href={`tel:${data.data.contact.phone_mobile}`}>
        {`Телефон: ${data.data.contact.phone_mobile}`}
      </Typography>
}
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


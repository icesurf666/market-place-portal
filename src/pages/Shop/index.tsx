import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import fetchShop from 'api/fetchShop';
import useFetch from 'hooks/useFetch';
import { IProduct } from 'react-app-env';
import ProductCard from 'components/ProductCard';
import { RouteComponentProps } from 'react-router-dom';

const Shop: React.FC<RouteComponentProps<{id: string}>> = ({ match, history, location }) => {

  const { data, fetch } = useFetch(fetchShop)
  const id = Number(match.params.id)
  console.log(data)
  useEffect(() => {
    fetch(id)
  }, [fetch])

  if(!data) return null

  console.log(data.data.products)
  return (
    <>
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


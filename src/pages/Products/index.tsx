import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import fetchProducts from 'api/fetchProducts';
import useFetch from 'hooks/useFetch';
import { IProduct } from 'react-app-env';
import ProductCard from 'components/ProductCard';

const Products = () => {

  const { data, fetch } = useFetch(fetchProducts)

  useEffect(() => {
    fetch()
  }, [])

  if(!data) return null

  console.log(data)
  return (
    <>
  <Grid container spacing={1}>
    {data.data.map((product: IProduct) => {
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

export default Products


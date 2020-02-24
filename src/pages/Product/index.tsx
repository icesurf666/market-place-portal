import React, { useEffect } from 'react'
import TextMobileStepper from 'components/Slider';
import { Grid } from '@material-ui/core';
import DescriptionCart from 'components/DescriptionCart';
import fetchProduct from 'api/fetchProduct';
import useApi from 'hooks/useApi';
import { RouteComponentProps } from 'react-router-dom';


const Product: React.FC<RouteComponentProps<{id: string}>> = ({ match, history, location }) => {
  const { data, fetch } = useApi(fetchProduct)
  const id = Number(match.params.id)
  console.log(id)
  useEffect(() => {
    fetch(id)
  }, [fetch])

  if(!data) return null
  return (
    <Grid container>
      <Grid item xs={6}>
        <TextMobileStepper product={data.data} />
      </Grid>
      <Grid item xs={6}>
        <DescriptionCart product={data.data} />
      </Grid>
    </Grid>
  );
}

export default Product

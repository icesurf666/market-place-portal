import React, { useEffect } from 'react'
import TextMobileStepper from 'components/Slider';
import { Grid } from '@material-ui/core';
import DescriptionCart from 'components/DescriptionCart';
import fetchProduct from 'api/fetchProduct';
import useFetch from 'hooks/useFetch';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import SlickSlider from './components/SliderSlick';
import TabsReviews from 'components/DescriptionCart/components/TabsReviews';


const Product: React.FC<RouteComponentProps<{id: string}>> = ({ match, history, location }) => {
  const { data, fetch } = useFetch(fetchProduct)
  const id = Number(match.params.id)
  useEffect(() => {
    fetch(id)
  }, [fetch, id])

  if(!data) return null
  return (
    <Grid container>
      <Grid item xs={5}>
        <TextMobileStepper product={data.data} />
      </Grid>
      <Grid item xs={7}>
        <DescriptionCart product={data.data} />
      </Grid>
      <Grid item xs={12}>
        <TabsReviews product={data.data} />
      </Grid>
      <Grid item xs={12}>
        <SlickSlider />
      </Grid>
    </Grid>
  );
}

export default withRouter(Product)

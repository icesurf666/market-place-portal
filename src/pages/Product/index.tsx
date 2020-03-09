import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core';
import DescriptionCart from 'components/DescriptionCart';
import fetchProduct from 'api/fetchProduct';
import useFetch from 'hooks/useFetch';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import SlickSlider from './components/SliderSlick';
import TabsReviews from 'components/DescriptionCart/components/TabsReviews';
import ProductSlider from 'components/Slider';


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
        <ProductSlider product={data.data} />
      </Grid>
      <Grid item xs={7}>
        <DescriptionCart product={data.data} />
      </Grid>
      <div style={{fontSize: 16}} dangerouslySetInnerHTML={{__html: data.data.html}}></div>

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

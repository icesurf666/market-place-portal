import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import ShopCard from 'components/ShopCard'
import useApi from 'hooks/useApi'
import fetchShops from 'api/fetchShops'
import { IShop } from 'react-app-env'

const Shops = () => {
  const { data, fetch } = useApi(fetchShops)

  useEffect(() => {
    fetch()
  }, [])

  if(!data) return null

  console.log(data)
  return (
  <Grid container spacing={1}>
    {data.data.map((shop: IShop) => {
      return (
      <Grid container item xs={4}>
      <ShopCard shop={shop} />
    </Grid>
      )
    })}
  </Grid>
  );
}

export default Shops


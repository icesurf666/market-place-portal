import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import ShopCard from "components/ShopCard";
import useFetch from "hooks/useFetch";
import fetchShops from "api/fetchShops";
import { IShop } from "react-app-env";
import Pagination from "@material-ui/lab/Pagination";

const Shops = () => {
  const { data, fetch } = useFetch(fetchShops);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(page);
  }, []);
  
  const handleChange = (event: any, value: number) => {
    setPage(value);
  };
  if (!data) return null;

  return (
    <Grid container spacing={1}>
      {data.data.map((shop: IShop) => {
        return (
          <Grid container justify="center" item xs={4}>
            <ShopCard shop={shop} />
          </Grid>
        );
      })}
      <Grid
        container
        style={{marginTop: 20}}
        justify="center"
      >
        <Pagination
          page={page}
          onChange={handleChange}
          count={Math.ceil(data.meta.total / data.meta.perPage)}
          color="primary"
        />
      </Grid>
    </Grid>
  );
};

export default Shops;

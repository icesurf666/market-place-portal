import React, { useEffect, useCallback, useState } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import fetchProducts from "api/fetchProducts";
import useFetch from "hooks/useFetch";
import { IProduct } from "react-app-env";
import ProductCard from "components/ProductCard";
import Filters from "./components/Filters";
import Pagination from "@material-ui/lab/Pagination";
import BigLoader from "components/BigLoader";
import { isEmpty } from "lodash";

const Products = () => {
  const [value, setValue] = React.useState<number[]>([1, 3000]);

  const { data, fetch, loading } = useFetch(fetchProducts);
  const [page, setPage] = useState(1);
  const [rating, setRating] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [min, setMin] = useState('0')
  const [max, setMax] = useState('0')

  useEffect(() => {
    fetch(page, searchQuery, rating, min, max);
  }, [fetch, page, searchQuery, rating, min, max]);

  const handleChange = (event: any, value: number) => {
    setPage(value);
  };
  const onSubmit = (values: any) => {
    setSearchQuery(values.searchQuery);
  };

  const onSubmitStars = (values: any) => {
    setRating(values.stars);
  };
  const onChangePrice = useCallback(
    (event: any, newValue: number[]) => {
      setValue(newValue as number[]);
      return (
        data &&
        data.data.filter(
          (product: IProduct) =>
            product.price >= newValue[0] && product.price <= newValue[1]
        )
      );
    },
    [data]
  );

  const onSubmitPrice = (values: any) => {
    console.log(values)
    setMin(values.min)
    setMax(values.max)
  }

  if (!data) return null;
  console.log(data);
  return (
    <Grid container>
      <Grid item xs={3}>
        <Filters
          defaultValues={data.meta}
          onSubmitStars={onSubmitStars}
          value={value}
          onSubmit={onSubmit}
          onChange={onChangePrice}
          onSubmitPrice={onSubmitPrice}
          products={data}
          page={page}
        />
      </Grid>
      <Grid item xs={9} style={{ position: "relative" }}>
        <Container>
          {!isEmpty(data.data) ? (
            <Grid container spacing={3}>
              {data.data.map((product: IProduct) => {
                return (
                  <Grid container item xs={3}>
                    <ProductCard product={product} />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Grid style={{marginTop: 20}}>
              <Typography>По вашему запросу ничего не найдено</Typography>
            </Grid>
          )}
          <Grid
            style={{ position: "absolute", bottom: -50 }}
            container
            justify="center"
          >
            <Pagination
              page={page}
              onChange={handleChange}
              count={Math.ceil(data.meta.total / data.meta.perPage)}
              color="primary"
            />
          </Grid>
        </Container>
      </Grid>
      {loading && <BigLoader />}
    </Grid>
  );
};

export default Products;

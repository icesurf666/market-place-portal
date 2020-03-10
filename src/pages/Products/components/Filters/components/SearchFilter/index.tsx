import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import searchProducts from 'api/searchProduct';
import useFetch from 'hooks/useFetch';
import { IProduct } from 'react-app-env';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});


interface IProps {
  page?: number
  products: any
}

const SearchFilter = ({page, products}: IProps) => {
  const classes = useStyles();
  const { data, fetch, loading } = useFetch(searchProducts);

  const onSubmit = useCallback((values: any) => {
    return products.data.filter((product: IProduct) => {
      return product.name
          .toLowerCase()
          .indexOf(values.q.toLowerCase()) >  -1;
  });
  }, [products])

  
  return (
    <div className={classes.root}>
  <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
              <Grid item>
                  <Field
                    fullWidth
                    required
                    name="q"
                    component={TextField}
                    type="text"
                    label="Название"
                  />
                <Grid item justify='flex-end' style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                  >
                    искать
                  </Button>
                </Grid>
              </Grid>
          </form>
        )}
      />
    </div>
  );
}
export default SearchFilter
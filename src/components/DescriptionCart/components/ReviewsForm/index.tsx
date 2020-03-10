/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from "react";
import {
  Paper,
  Grid,
  Button,
  TextField,
  CircularProgress,
  Typography
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import createReview from "api/createReviews";
import { IProduct, IUser } from "react-app-env";
import { useSelector } from "react-redux";
import get from "lodash/get";

interface IProps {
  product: IProduct;
}
const ReviewsForm = ({ product }: IProps) => {
  const isAuth: IUser = useSelector((store: any) => get(store, 'auth.isAuth', []))
  const [value, setValue] = React.useState<number | null>(0);
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const rating = value !== null ? value : 0;

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);
    try {
      await createReview({
        rating: rating,
        comment: desc,
        product_id: product.id
      })
      .then((res) => res.success ? setSuccess(true) : setSuccess(false));
    } catch (e) {
      console.log(e.message);
    }
    setLoading(false);
  };
  const handleChange = (event: any) => {
    setDesc(event.target.value);
  };

  return (
    isAuth ? (
    <form>
      <Paper style={{ padding: 16 }}>
        {success ? <Typography>Ваш отзыв будет добавлен после модерации</Typography> : ''}
        {success === false ? <Typography>Ошибка, убедитесь в заполненности всех полей или повторите позже</Typography> : ''}
        <Grid container alignItems="center" justify="center" spacing={2}>
          <Grid item xs={12}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              multiline
              fullWidth
              label="Введите ваш отзыв"
              onChange={handleChange}
            />
          </Grid>
          <Grid item style={{ marginTop: 16 }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              size="medium"
              onClick={onSubmit}
            >
              Опубликовать
            </Button>
            {loading && <CircularProgress />}
          </Grid>
        </Grid>
      </Paper>
    </form>
    ) : (
      <Paper style={{ padding: 16 }}>
        <Typography>
          Для того, чтобы написать отзыв, войдите или зарегистрируйтесь.
        </Typography>
      </Paper>
    )
  );
};

export default ReviewsForm;

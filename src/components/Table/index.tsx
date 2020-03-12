import React, { useMemo, useCallback, useState } from "react";
import MUIDataTable from "mui-datatables";
import { IUser } from "react-app-env";
import { get, sumBy } from "lodash";
import { useSelector } from "react-redux";
import {
  Button,
  Grid,
  Typography,
  Paper,
  TextField,
  FormHelperText,
  MenuItem
} from "@material-ui/core";
import createOrder from "api/createOrder";
import useCart from "hooks/useCart";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { Form, Field } from "react-final-form";
import { TextField as TextFieldF } from "final-form-material-ui";
import { validate } from "./validate";
import { Select } from "components/MuiSelect";

const CartTable = () => {
  const { items, clear, removeItem, addItem, removeItemCount } = useCart();

  const handleDelete = (selectableRows: number) => {
    items
      .filter((item, index) => index === selectableRows)
      .map(remove => {
        removeItem(remove);
      });
  };

  const handleAdd = (selectableRows: number) => {
    items
      .filter((item, index) => index === selectableRows)
      .map(add => {
        addItem(add);
      });
  };

  const handleRemove = (selectableRows: number) => {
    items
      .filter((item, index) => index === selectableRows)
      .map(add => {
        removeItemCount(add);
      });
  };

  const columns = [
    {
      name: "Название",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "Цена",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "Сумма",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "Количество",
      options: {
        filter: true,
        sort: false
      }
    },
    {
      name: "",
      options: {
        filter: false,
        customBodyRender: (selectableRows: number) => {
          return (
            <>
              <IconButton onClick={() => handleRemove(selectableRows)}>
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => handleAdd(selectableRows)}>
                <AddIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(selectableRows)}>
                <DeleteIcon color="error" />
              </IconButton>
            </>
          );
        }
      }
    }
  ];

  const getUser: IUser = useSelector((store: any) =>
    get(store, "auth.user.user", [])
  );

  const carts = items.map((item, index) => {
    const total = item.product.price * item.count;
    return [item.product.name, item.product.price, total, item.count, index];
  });

  const products = items.map(item => {
    return { id: item.product.id, amount: item.count };
  });
  const userId = getUser.id;
  const onResetCart = useCallback(() => {
    clear();
  }, []);
  const onSubmit = async (values: any) => {
    try {
      await createOrder({
        products,
        user: { id: userId },
        city: values.city,
        country: values.country,
        phone_mobile: values.phone_mobile,
        address: values.address,
        delivery_price: values.delivery_price,
      }).then(res => {
        window.location = res.data.acquiring_url;
        clear();
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  const total = items.map((item, index) => {
    const total = item.product.price * item.count;
    return { total };
  });
  const sum = sumBy(total, "total");
  return (
    <>
      <Grid container justify="space-between">
        <Grid item xs={8}>
          <MUIDataTable
            title={"Корзина"}
            data={carts}
            columns={columns}
            options={{
              filter: false,
              sort: false,
              selectableRows: "none",
              print: false,
              download: false,
              viewColumns: false
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ padding: 16 }}>
            <Typography style={{ lineHeight: 1.1 }}>
              * Заказы будут разделены по магазинам
            </Typography>
            <Typography style={{ lineHeight: 1.1 }}>
              * Общая стоимость заказа при оплате увеличиться на стоимость доставки
            </Typography>

            <Typography variant="h5" style={{ marginTop: 10 }}>
              Итого: {sum}₽
            </Typography>
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({
                handleSubmit,
                submitting,
                error,
                pristine,
                values
              }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <Grid
                    container
                    alignItems="center"
                    justify="center"
                    spacing={2}
                  >
                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        required
                        name="country"
                        component={TextFieldF}
                        type="text"
                        label="Страна"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        required
                        name="city"
                        type="text"
                        component={TextFieldF}
                        label="Город"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        required
                        name="address"
                        component={TextFieldF}
                        type="text"
                        label="Адрес"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Field
                        fullWidth
                        required
                        name="phone_mobile"
                        component={TextFieldF}
                        type="text"
                        label="Телефон"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Select
                        name="delivery_price"
                        label="Выберите доставку"
                        formControlProps={{ margin: "none" }}
                      >
                        <MenuItem value="400">Почта России 400р</MenuItem>
                        <MenuItem value="300">СДЭК 300р</MenuItem>
                        <MenuItem value="150">DHL 150р</MenuItem>
                        <MenuItem value="200">BoxBerry 200р</MenuItem>

                      </Select>
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={submitting}
                        type="submit"
                        fullWidth
                        style={{ marginBottom: 20, marginTop: 20 }}
                      >
                        Оплатить
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              )}
            />

            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              fullWidth
              onClick={onResetCart}
            >
              Очистить корзину
            </Button>
            <Typography variant="h6">{}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default CartTable;

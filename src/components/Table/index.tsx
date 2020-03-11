import React, { useMemo, useCallback, useState } from "react";
import MUIDataTable from "mui-datatables";
import { IUser } from "react-app-env";
import { get, sumBy } from "lodash";
import { useSelector } from "react-redux";
import { Button, Grid, Typography, Paper, TextField } from "@material-ui/core";
import createOrder from "api/createOrder";
import useCart from "hooks/useCart";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const CartTable = () => {
  const { items, clear, removeItem, addItem, removeItemCount } = useCart();
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const handleCountry = (event: any) => {
    setCountry(event.target.value);
  };
  const handleCity = (event: any) => {
    setCity(event.target.value);
  };
  const handlePhone = (event: any) => {
    setPhone(event.target.value);
  };
  const handleAddress = (event: any) => {
    setAddress(event.target.value);
  };

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
  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      await createOrder({
        products,
        user: { id: userId },
        city,
        country,
        phone_mobile: phone,
        address
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
            <Typography variant="h5">Итого: {sum}₽</Typography>
            <TextField
              id="standart-basic"
              onChange={handleCountry}
              fullWidth
              label="Страна"
            />
            <TextField
              id="standart-basic"
              onChange={handleCity}
              fullWidth
              label="Город"
            />
            <TextField
              id="standart-basic"
              onChange={handleAddress}
              fullWidth
              label="Адрес"
            />
            <TextField
              id="standart-basic"
              onChange={handlePhone}
              fullWidth
              label="Номер телефона"
            />
            <Button
              onClick={handleClick}
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginBottom: 20, marginTop: 10 }}
            >
              Оплатить
            </Button>
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

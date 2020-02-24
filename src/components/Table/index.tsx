import React, { useMemo, useCallback } from "react";
import MUIDataTable from "mui-datatables";
import { IProduct, ICart, ICartItem, IUser } from "react-app-env";
import { isEqual, sum, get } from "lodash";
import { useSelector } from "react-redux";
import {
  Button,
  Grid,
  FormControlLabel,
  Switch,
  Icon,
  Typography
} from "@material-ui/core";
import createOrder from "api/createOrder";
import useCart from "hooks/useCart";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

const CartTable = () => {
  const { items, clear, removeItem, addItem, removeItemCount } = useCart();
  const handleDelete = (selectableRows: number) => {
      items
        .filter((item, index) => index === selectableRows)
        .map(remove => {
          removeItem(remove);
        });
  }
  const handleAdd = (selectableRows: number) => {
    items
      .filter((item, index) => index === selectableRows)
      .map(add => {
        addItem(add)
      });
}
const handleRemove = (selectableRows: number) => {
  items
    .filter((item, index) => index === selectableRows)
    .map(add => {
      removeItemCount(add)
    });
}


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
    },
  ];

  const getUser: IUser = useSelector((store: any) =>
    get(store, "auth.user.user", [])
  );

  const carts = 
    items.map((item, index) => {
      const total = item.product.price * item.count;
      return [item.product.name, item.product.price, total, item.count, index];
    });
 

  const products = items.map(item => {
      return { id: item.product.id, amount: item.count };
    });
 ;

  const userId = getUser.id;
  const payload = { products, user: { id: userId } };

  const onResetCart = useCallback(() => {
    clear();
  }, []);

  const handleClick = useCallback(async () => {
    createOrder(payload).then(res => {
      window.location = res.data.acquiring_url;
      clear();
    });
  }, []);

  return (
    <>
      <Grid container justify="space-between">
        <Grid item xs={9}>
          <MUIDataTable
            title={"Корзина"}
            data={carts}
            columns={columns}
            options={{
              filter: false,
              sort: false,
              selectableRows: "none"
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={handleClick}
            variant="contained"
            size="large"
            color="primary"
            fullWidth
            style={{marginBottom: 20}}
          >
            Купить сейчас
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
        </Grid>
      </Grid>
    </>
  );
};
export default CartTable;

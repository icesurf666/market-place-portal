import React, { useEffect, useCallback, useState } from "react";
import fetchOrders from "api/fetchOrders";
import useFetch from "hooks/useFetch";
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  ListItemText,
  ListItem,
  List,
  ListItemIcon
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import humanizeStatus from "utils/humanizeStatus";
import setColors from "utils/setColors";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MUIDataTable from "mui-datatables";
import AdjustIcon from "@material-ui/icons/Adjust";
const columns = ["Название", "Количество", "Цена"];
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    wrapper: {
    }
  })
);

const Orders: React.FC = () => {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const { data, fetch } = useFetch(fetchOrders);

  const handleChange = (event: any, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    fetch(page);
  }, [page, fetch]);

  if (!data) return null;

 

  console.log(data);
  const normalizeData = data.data.map((items: any, index: number) => {
    const prod = items.products.map((product: any) => {
      return [
        product.product.name,
        product.current_amount,
        product.current_price
      ];
    });
    return prod;
  });

  return (
    <Grid xs={12}>
      <Grid className={classes.wrapper}>
        {data.data.map((order: any, index: number) => {
          return (
            <Grid item key={index} style={{ marginTop: 10 }}>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div>
                    <Typography
                      className={classes.heading}
                    >{`Заказ № ${order.id}`}</Typography>
                    <Typography
                      className={classes.heading}
                      color={setColors(order.status)}
                    >
                      {humanizeStatus(order.status)}
                    </Typography>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Grid container justify="space-between">
                    <Grid item xs={6}>
                      <MUIDataTable
                        title={"Заказ"}
                        data={normalizeData[index]}
                        columns={columns}
                        options={{
                          filter: false,
                          sort: false,
                          selectableRows: "none",
                          print: false,
                          download: false,
                          viewColumns: false,
                        }}
                      />
                    </Grid>
                    <Grid xs={6}>
                      <List>
                        <ListItem>
                          <ListItemIcon>
                            <MonetizationOnIcon />
                          </ListItemIcon>
                          <ListItemText>
                            {`Общая стоимость заказа ${order.total_price}`}
                          </ListItemText>
                        </ListItem>
                        <ListItem>
                          {humanizeStatus(order.status) !== "" ? (
                            <ListItemIcon>
                              <AdjustIcon />
                            </ListItemIcon>
                          ) : null}
                          <ListItemText color="#ffffff">
                            {humanizeStatus(order.status)}
                          </ListItemText>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Grid>
          );
        })}
      </Grid>
      <Grid style={{ marginTop: 20 }} container justify="center">
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

export default Orders;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import StorefrontIcon from '@material-ui/icons/Storefront'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import WorkIcon from '@material-ui/icons/Work'
import {Link as RouteLink} from "react-router-dom";
import ShopIcon from '@material-ui/icons/Shop'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  type DrawerSide = 'left';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side: DrawerSide) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem button onClick={toggleDrawer('left', false)} component={RouteLink} to='/products'>
          <ListItemIcon><WorkIcon /></ListItemIcon>
          <ListItemText primary='Товары' />
        </ListItem>

        <ListItem button onClick={toggleDrawer('left', false)} component={RouteLink} to='/shops'>
          <ListItemIcon><StorefrontIcon /></ListItemIcon>
          <ListItemText primary='Магазины' />
        </ListItem>

        <ListItem button onClick={toggleDrawer('left', false)} component={RouteLink} to='/cart'>
          <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
          <ListItemText primary='Корзина' />
        </ListItem>

        <ListItem button onClick={toggleDrawer('left', false)} component={RouteLink} to='/orders'>
          <ListItemIcon><ShopIcon /></ListItemIcon>
          <ListItemText primary='Мои заказы' />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton edge="start" onClick={toggleDrawer('left', true)} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
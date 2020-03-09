import React from 'react'
import { AppBar, Toolbar, InputBase, createStyles, makeStyles, fade, Theme, Typography, Menu, MenuItem, IconButton, Badge } from '@material-ui/core'
import TemporaryDrawer from 'components/Drawer';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logoutFetch from 'api/logout'
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore'
import { signOutUser } from 'store/actions';
import { IUser } from 'react-app-env';
import { get, sumBy } from 'lodash';
import useCart from 'hooks/useCart';

const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  MuiAppBar: {
    background: 'linear-gradient(145deg,#027be3 11%,#1a237e 75%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    color: '#fff',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 20,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}),
);

const CustomAppBar: React.FC = () => {
  const { items } = useCart()
  const countProduct = sumBy(items, 'count')
  const dispatch = useDispatch()
  const isAuth: IUser = useSelector((store: any) => get(store, 'auth.isAuth', []))
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null)
    dispatch(signOutUser())
    logoutFetch()
    dispatch(signOutUser())
    localStorage.removeItem('token')
  }

  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar>
        <TemporaryDrawer />
        <Typography component={Link} to='/' className={classes.title} variant="h6" noWrap>
            kenguru shop
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Поиск..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <MenuItem component={Link} to='/cart'>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={countProduct} color="secondary">
            <LocalGroceryStoreIcon />
          </Badge>
        </IconButton>
      </MenuItem>
      <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            {isAuth ? (
            <>
              <MenuItem component={Link} to='/user' onClick={handleClose}>Аккаунт</MenuItem>
              <MenuItem component={Link} to='/auth' onClick={handleLogout}>Выход</MenuItem>
            </>
            ) : (
              <MenuItem component={Link} to='/auth' onClick={handleClose}>Вход</MenuItem>
            )}
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default CustomAppBar
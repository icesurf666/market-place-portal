import React from 'react'
import { Route, Redirect } from 'react-router';
import { IUser } from 'react-app-env';
import { useSelector } from 'react-redux';
import { get } from 'lodash';

interface IProps {
  component: any,
  rest?: any,
  path?: string,
}
function PrivateRoute({component: Component, path, ...rest}: IProps) {
  const isAuth: IUser = useSelector((store: any) => get(store, 'auth.isAuth', []))

  return (
  <Route
    path={path}
    {...rest}
    render={props => isAuth
    ? <Component {...props} />
    :<Redirect to='/auth' />
    }
  />
)
}

export default PrivateRoute
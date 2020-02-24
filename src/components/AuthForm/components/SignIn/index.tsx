/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import { Paper, Grid, Button, FormHelperText} from '@material-ui/core'
import { TextField } from 'final-form-material-ui'
import login from 'api/login';
import { useDispatch } from 'react-redux';
import { setUserAfterSignIn } from 'store/actions';
import useApi from 'hooks/useApi';
import { useHistory } from 'react-router-dom';

const SignIn: React.FC = () => {
  let history = useHistory()
  const { data, fetch: onSubmit } = useApi(login)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(data)
    if (!data) { return }
    if(!data.success) { return console.log(data.message) }
    localStorage.setItem('token', data.data.token)
    dispatch(setUserAfterSignIn(data.data))
    data.success && history.push('/products')
  })

  return (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, error, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="center" justify='center' spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="email"
                    component={TextField}
                    type="text"
                    label="Email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="password"
                    type="password"
                    component={TextField}
                    label="Пароль"
                  />
                <FormHelperText variant='filled' id="component-error-text">{data && data.message}</FormHelperText>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                    size='medium'
                  >
                    Вход
                  </Button>
                </Grid>
              </Grid>
            </Paper>
  </form>
        )}
        />
  )
        }
 
export default SignIn
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import { Paper, Grid, Button} from '@material-ui/core'
import { TextField } from 'final-form-material-ui'
import signUp from 'api/signUp'
import useFetch from 'hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setUserAfterSignUp } from 'store/actions'
import { useHistory } from 'react-router-dom'

const onSubmit = async (values: any) => {
  signUp(values)
}

const SignUp: React.FC = () => {
  let history = useHistory()
  const { data, fetch: onSubmit } = useFetch(signUp)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!data) { return }
    if(!data.success) { return console.log(data.message) }
    localStorage.setItem('token', data.data.token)
    dispatch(setUserAfterSignUp(data.data))
    data.success && history.push('/products')

  })

  return (
    <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="center" justify='center' spacing={2}>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="login"
                    component={TextField}
                    type="text"
                    label="Логин"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="email"
                    component={TextField}
                    type="text"
                    label="Почта"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="password"
                    component={TextField}
                    type="password"
                    label="Пароль"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="c_password"
                    component={TextField}
                    type="password"
                    label="Повторите пароль"
                  />
                </Grid>

                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size='medium'
                    disabled={submitting}
                  >
                    Регистрация
                  </Button>
                </Grid>
              </Grid>
            </Paper>
  </form>
        )}
        />
  )
        }
 
export default SignUp
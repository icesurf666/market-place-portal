import React, { useEffect, useCallback } from 'react'
import { Form, Field } from 'react-final-form'
import { Paper, Grid, Button} from '@material-ui/core'
import { TextField } from 'final-form-material-ui'
import useFetch from 'hooks/useFetch'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAfterUpdate } from 'store/actions'
import updateUser from 'api/updateUser'
import { getInitialValues } from 'utils'
import { get } from 'lodash'
import { IUser } from 'react-app-env'

const UserForm: React.FC = () => {

  const user: IUser = useSelector((store: any) => get(store, 'auth.user.user', []))
  const { data, fetch } = useFetch(updateUser)
  const dispatch = useDispatch()

  const saveUser = useCallback(async(values) => { 
    values.id = user.id
    await fetch(values) 
  }, [])

  useEffect(() => {
    if (!data) { return }
    console.log(data.data)
    dispatch(setUserAfterUpdate(data.data))
  }, [data])

  return (
    <Form
        onSubmit={saveUser}
        initialValues={getInitialValues(user)}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Grid container alignItems="center" justify='center' spacing={2}>
            <Grid item xs={6}></Grid>
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

                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size='medium'
                    disabled={submitting}
                  >
                    Обновить
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            </Grid>
  </form>
        )}
        />
  )
        }
 
export default UserForm
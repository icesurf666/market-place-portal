/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react'
import { Form, Field } from 'react-final-form'
import { Paper, Grid, Button, FormHelperText} from '@material-ui/core'
import { TextField } from 'final-form-material-ui'
import leads from 'api/leads'
import { useDispatch } from 'react-redux';
import useFetch from 'hooks/useFetch';
import { useHistory } from 'react-router-dom';
import { validate } from './validate'

const LeadForm: React.FC = () => {
  const { data, fetch: onSubmit } = useFetch(leads)
  useEffect(() => {
    if (!data) { return }
    if(!data.success) { return console.log(data.message) }
  })

  return (
    <Form
        onSubmit={onSubmit}
        validate={validate}
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
                    label="Почта"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="name"
                    component={TextField}
                    type="text"
                    label="Имя Фамилия"
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
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="phone"
                    type="text"
                    component={TextField}
                    label="Телефон"
                  />
                  </Grid>
                <Grid item xs={12}>
                  <Field
                    fullWidth
                    required
                    name="description"
                    type="text"
                    multiline
                    component={TextField}
                    label="Описание вашей деятельности"
                  />
                  </Grid>
                <FormHelperText variant='filled' id="component-error-text">
                  {data && data.success ? 'Успешно, перейдите на почту.' : data && data.success === false ? 'Такой пользователь уже существует' : ''}
                  </FormHelperText>
                </Grid>
                <Grid item style={{ marginTop: 16, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={submitting}
                    size='medium'
                  >
                    Подать заявку
                  </Button>
                </Grid>
            </Paper>
  </form>
        )}
        />
  )
        }
 
export default LeadForm
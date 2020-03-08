/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react'
import { Paper, Grid, Button, TextField, CircularProgress} from '@material-ui/core'
import signUp from 'api/signUp'
import useFetch from 'hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setUserAfterSignUp } from 'store/actions'
import { useHistory } from 'react-router-dom'
import Rating from '@material-ui/lab/Rating'
import createReview from 'api/createReviews'
import { IProduct } from 'react-app-env'



interface IProps {
  product: IProduct,
}
const ReviewsForm = ({product}: IProps) => {
  const [value, setValue] = React.useState<number | null>(0)
  const [desc, setDesc] = useState('')
  const [loading, setLoading] = useState(false)
  const rating = value !== null ? value : 0

  const onSubmit = async (event: any) => {
    event.preventDefault()
    setLoading(true)
    try {
      await createReview({
        rating: rating,
        comment: desc,
        product_id: product.id,
      })
    } catch(e) {
      console.log(e.message)
    }
    setLoading(false)
  }
  const handleChange = (event: any) => {
    setDesc(event.target.value)
  }

  return (
    <form>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="center" justify='center' spacing={2}>
                <Grid item xs={12}>  
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />            
                </Grid>
                    <Grid item xs={12}>
                      <TextField multiline fullWidth label='Введите ваш отзыв' onChange={handleChange}/>
                    </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size='medium'
                    onClick={onSubmit}
                  >
                    Опубликовать
                  </Button>
                  {loading && <CircularProgress />}
                </Grid>
              </Grid>
            </Paper>
  </form>
  )
        }
 
export default ReviewsForm
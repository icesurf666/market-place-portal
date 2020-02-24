import { all, takeEvery, take } from 'redux-saga/effects'
import { addToCart, updateCart } from '../store/actions'
import { ADD_TO_CART, UPDATE_CART } from '../store/actions/actionTypes'

function* watchStart(): any {
  const { payload } = yield take(ADD_TO_CART)
  yield takeEvery(addToCart, payload)
}

function* watchUpdate(): any {
  const { payload } = yield take(UPDATE_CART)
  yield takeEvery(updateCart, payload)
}


export default function* rootSaga(): any {
  yield all([
    watchStart(),
    watchUpdate(),
  ])
}
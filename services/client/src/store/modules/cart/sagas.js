import {
  call,
  select,
  put,
  all,
  takeLatest,
  takeEvery,
  delay,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import {
  addToCartSuccess,
  updateAmountSuccess,
  updateAmountFailure,
} from './actions';

function* addToCart({ id }) {
  yield delay(300);

  const productExists = yield select(state =>
    state.cart.products.find(p => p.id === id)
  );

  const response = yield call(api.get, `/products/${id}`);

  const product = {
    id: response.data.product.id,
    title: response.data.product.title,
    price: response.data.product.variants[0].price,
    image: response.data.product.images[0].src,
  };

  const data = {
    ...product,
    amount: 1,
    priceFormatted: formatPrice(product.price),
  };

  yield put(addToCartSuccess(data));
  // }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    toast.error('Amount requested is out of stock.');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeEvery('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);

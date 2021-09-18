import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productsReducer } from './reducers/productsReducer'
import { productDetailsReducer } from './reducers/productDetailsReducer'
import { loginReducer } from './reducers/userReducer'

const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    userAuth: loginReducer
})

let initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
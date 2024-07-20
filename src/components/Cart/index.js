import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Header'
import CartItem from '../CartItem'

import CartContext from '../../context/CartContext'

import './index.css'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)

  const renderEmptyView = () => (
    <div className="empty-cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
        alt="empty view"
        className="empty-view-image"
      />
      <p className="empty-description">Your cart is Empty.</p>
      <Link to="/">
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </Link>
    </div>
  )

  const renderCartItems = () => (
    <>
      <div className="cart-items-header">
        <h1>Cart Items</h1>
        <button
          type="button"
          className="remove-all-btn text-primary"
          onClick={removeAllCartItems}
        >
          Remove All
        </button>
      </div>
      <ul className="cart-list">
        {cartList.map(dish => (
          <CartItem key={dish.dishId} cartItemDetails={dish} />
        ))}
      </ul>
    </>
  )

  return (
    <div className="cart-page-container">
      <Header />
      <div className="cart-body-container">
        {cartList.length === 0 ? renderEmptyView() : renderCartItems()}
      </div>
    </div>
  )
}

export default Cart

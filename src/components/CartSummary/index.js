// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let totalPrice = 0
      cartList.forEach(eachcartItem => {
        totalPrice += eachcartItem.price * eachcartItem.quantity
      })

      const itemsInCart = cartList.length

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="cart-summary-heading">
              <span className="span-total-price">Order Total:</span> Rs{' '}
              {totalPrice}
              /-
            </h1>
            <p className="cart-summary-content">{itemsInCart} items in cart</p>
            <button type="button" className="checkout-button d-sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary

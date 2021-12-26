import React from 'react'

function Drawer({ onCloseCart, items = [] }) {

  return (
    <div className="overlay">
      <div className="drawer">

        <h2 className="d-flex justify-between mb-20">
          Basket
          <img onClick={onCloseCart} className="removeBtn cu-p" src="/img/icons/btn-remove.svg" alt="Close" />
        </h2>

        <div className="items">
          {
            items.map(obj => (
              <div className="cartItem d-flex align-center">
                <div className="cartItemImg" style={{ backgroundImage: `url(${obj.imageUrl})` }}></div>
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} azn.</b>
                </div>
                <img className="removeBtn" src="/img/icons/btn-remove.svg" alt="Remove" />
              </div>
            ))
          }
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>21 498 azn.</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>1074 azn.</b>
            </li>
          </ul>
          <button className="greenButton">
            Checkout
            <img src="/img/icons/arrow.svg" alt="Arrow" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default Drawer

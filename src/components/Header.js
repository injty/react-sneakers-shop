import React from 'react'

function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logotype" />
        <div>
          <h3 className="text-uppercase">Sneakers shop</h3>
          <p className="opacity-5">Best sneakers ever</p>
        </div>
      </div>
      <ul className="d-flex align-center">
        <li className="mr-15 d-flex align-center">
          <img width={18} height={18} src="/img/icons/cart.svg" alt="Basket" />
          <span>1205 azn.</span>
        </li>
        <li className="d-flex align-center">
          <img width={18} height={18} src="/img/icons/user.svg" alt="Profile" />
        </li>
      </ul>
    </header>
  )
}

export default Header

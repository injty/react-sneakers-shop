import React from 'react'
import styles from './Card.module.css'

function Card(props) {

  const onClickHandler = () => {
    alert(props.price)
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/icons/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{props.price}</b>
        </div>
        <button className={styles.button} onClick={onClickHandler}>
          <img src="/img/icons/btn-plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  )
}

export default Card



import { useContext } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext)
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.buttonMinus}
        type='button'
        onClick={() => increaseBy(-1)}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={styles.buttonAdd}
        type='button'
        onClick={() => increaseBy(1)}
      >
        +
      </button>
    </div>
  )
}

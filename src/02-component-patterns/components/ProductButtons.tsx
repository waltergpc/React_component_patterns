import { useContext, CSSProperties } from 'react'
import { ProductContext } from './ProductCard'
import styles from '../styles/styles.module.css'

export interface ButtonProps {
  className?: string
  style?: CSSProperties
}

export const ProductButtons = ({ className, style }: ButtonProps) => {
  const { increaseBy, counter } = useContext(ProductContext)
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
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

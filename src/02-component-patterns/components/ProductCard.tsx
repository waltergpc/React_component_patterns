import useProduct from '../hooks/useProduct'
import styles from '../styles/styles.module.css'
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces'
import { createContext } from 'react'

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value })
  const { title, img } = product
  return (
    <Provider value={{ counter, increaseBy, title, img }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={img} />
      <ProductTitle title={title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  )
}

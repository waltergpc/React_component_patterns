import { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interfaces'

const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart
  }>({})

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number
    product: Product
  }) => {
    if (count === 0) {
      const { [product.id]: toDelete, ...rest } = shoppingCart
      setShoppingCart({ ...rest })
      return
    }
    setShoppingCart({ ...shoppingCart, [product.id]: { ...product, count } })
  }

  return { shoppingCart, onProductCountChange }
}

export default useShoppingCart

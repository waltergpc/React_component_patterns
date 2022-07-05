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
    // if (count === 0) {
    //   const { [product.id]: toDelete, ...rest } = shoppingCart
    //   setShoppingCart({ ...rest })
    //   return
    // }
    // setShoppingCart({ ...shoppingCart, [product.id]: { ...product, count } })

    const productInCart: ProductInCart = shoppingCart[product.id] || {
      ...product,
      count: 0,
    }
    if (Math.max(productInCart.count + count, 0) > 0) {
      productInCart.count += count
      setShoppingCart({ ...shoppingCart, [product.id]: productInCart })
      return
    }
    const { [product.id]: toDelete, ...rest } = shoppingCart
    setShoppingCart({ ...rest })
    return
  }

  return { shoppingCart, onProductCountChange }
}

export default useShoppingCart

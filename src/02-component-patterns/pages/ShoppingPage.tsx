import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components'
import { products } from '../data/products'
import useShoppingCart from '../hooks/useShoppingCart'
import '../styles/custom-styles.css'

const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              className='bg-dark text-white'
              onChange={onProductCountChange}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className='custom-image' />
              <ProductTitle className='text-bold' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          )
        })}
      </div>

      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className='bg-dark text-white'
            style={{ width: '100px' }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className='custom-image' />
            <ProductButtons className='custom-buttons' />
          </ProductCard>
        ))}
      </div>
    </div>
  )
}

export default ShoppingPage

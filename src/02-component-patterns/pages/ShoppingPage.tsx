import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components'
import { products } from '../data/products'

import '../styles/custom-styles.css'

const product = products[0]

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className='bg-dark text-white'
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage className='custom-image' />
            <ProductTitle className='text-bold' />
            <ProductButtons className='custom-buttons' />
            <button type='button' onClick={reset}>
              Reset
            </button>
            {!isMaxCountReached && (
              <button type='button' onClick={() => increaseBy(2)}>
                +2
              </button>
            )}

            <button type='button' onClick={() => increaseBy(-2)}>
              -2
            </button>
            <span>
              {count}-{maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  )
}

export default ShoppingPage

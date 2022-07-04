import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../components'
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug',
  img: './coffee-mug.png',
}

const ShoppingPage = () => {
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
        <ProductCard product={product} className='bg-dark text-white'>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-bold' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard product={product} className='bg-dark text-white'>
          <ProductImage className='custom-image' />
          <ProductTitle title='Coffee altered' className='text-bold' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{ backgroundColor: 'rgb(125, 158, 145)' }}
        >
          <ProductImage
            style={{ boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)' }}
          />
          <ProductTitle title='Coffee ground' style={{ fontWeight: 'bold' }} />
          <ProductButtons style={{ display: 'flex', justifyContent: 'end' }} />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage

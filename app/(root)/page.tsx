import ProductList from '@/components/shared/product/product-list'
//import sampleData from '@/db/sample-data'
import { getLatestProducts } from '@/lib/actions/product.actions'

const Homepage = async () => {
  const latestProducts = await getLatestProducts()
  console.log('commit - aaa')
  return (
    <>
      <ProductList
        //data={sampleData.products}
        data={latestProducts}
        title='Newest Arrivals'
        limit={4}
      />
    </>
  )
}

export default Homepage

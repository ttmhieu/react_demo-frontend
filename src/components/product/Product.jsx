import { useState } from "react"
import { products } from "../assets/data/data"
import { ProductItems } from "./ProductItems";
import './custom.scss';

export const Product = () => {
  const [cartItems, setCartItems] = useState(products)
  return (
    <>
      <section className='product'>
          <ProductItems cartItems={cartItems} />
      </section>
    </>
  )
}

import React from "react"
import { Category } from "../../Component/category/Category"
import { Order } from "../../Component/hero/Order"
import { Slider } from "../../Component/hero/Slider"
import { Product } from "../../Component/product/Product"

export const Home = () => {
  return (
    <>
      <Slider />
      <Order />
      <Category />
      <Product />
    </>
  )
}

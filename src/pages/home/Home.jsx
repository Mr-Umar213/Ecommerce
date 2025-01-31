import React, { useContext } from 'react'
import Layout from '../../compnent/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../compnent/heroSection/HeroSection'
import Filter from '../../compnent/filter/Filter'
import ProductCard from '../../compnent/productCard/ProductCard'
import Testimonial from '../../compnent/testimonial/Testimonial'

function Home() {
   
  return (
    <Layout>
      <HeroSection/>
      <Filter/>
      <ProductCard/>
      <Testimonial/>
    </Layout>
  )
}

export default Home 
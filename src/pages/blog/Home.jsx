import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Layout from '../../components/layout/Layout'
import Card from './components/card/Card'

const Home = () => {
  return (
   <Layout>
  <div className='flex flex-wrap justify-center space-x-5 mt-6'>
    <Card />
    <Card />
    <Card />
    <Card />

  </div>
   </Layout>
  )
}

export default Home
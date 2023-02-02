import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Slider from '../../Slider/Slider'
import Featureproducts from '../../Components/Featuredproducts/Featureproducts'
// import Comp from '../../Components/Comp/Comp'
import Footer from '../../Components/Footer/Footer'
import Categories from '../../Components/CategoriesF/Categories'
import Contacts from '../../Components/ContactsF/Contacts'
// import './Home.css'

const Home = () => {
  return (
    <div className='flex flex-col items-center w-full min-h-screen'>
      <Navbar/>
      <Slider/>
      <Featureproducts
        typed='Featured'
      />
      <Categories/>
      <Featureproducts
        typed='Trending'
      />
      <Contacts/>
      <div className='flex justify-center w-full border'>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
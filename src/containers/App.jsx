import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useMocks from '../hooks/useMocks'
import '../assets/styles/App.scss'

const App = () => {
  const mockState = useMocks('http://localhost:3000/initialState');
  return mockState.length === 0 ? <h1>Loading...</h1> : (
    <div className="App">
      <Header />
      <Search />
        <Categories title="Tendencias">
          <Carousel>
            {mockState.trends.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
        <Categories title="Originales">
          <Carousel>
            {mockState.originals.map(item => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Clothing from '../components/Clothing'
import Food from '../components/Food'
import Sales from '../components/Sales'
import Quotes from '../components/Quotes'
import Bestsellers from '../components/Bestsellers'
import RegNow from '../components/RegNow'
import Info from '../components/Info'
import AnimalPics from '../components/AnimalPics'

function Main() {
	return (
		<div>
			<Header />
			<Slider />
			<Categories />
			<Clothing />
			<Food />
			<Sales />
			<Quotes />
			<Bestsellers />
			<RegNow />
			<Info />
			<AnimalPics />
			<Footer />
		</div>
	)
}

export default Main
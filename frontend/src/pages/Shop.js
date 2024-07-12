import React from 'react'
import Header from '../components/Header'
import RegNow from '../components/RegNow'
import Info from '../components/Info'
import AnimalPics from '../components/AnimalPics'
import Footer from '../components/Footer'
import ShopItems from '../components/ShopItems'

function Shop() {
	return (
		<div>
			<Header />
			<ShopItems />
			<RegNow />
			<Info />
			<AnimalPics />
			<Footer />
		</div>
	)
}

export default Shop
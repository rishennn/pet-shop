import React from 'react'
import ShopCategories from './filter/ShopCategories'
import Tags from './filter/Tags'
import Brands from './filter/Brands'
import Price from './filter/Price'

function Filter() {
	return (
		<div className='filter'>
			<input type="text" placeholder='Search For Products' />

			<ShopCategories />
			<Tags />
			<Brands />
			<Price />
		</div>
	)
}

export default Filter
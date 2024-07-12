import React from 'react'
import Filter from './Filter'
import ShopProducts from './shop/ShopProducts'

function MainShop() {
	return (
		<section>
			<div className="wrapper">
				<div className="mainShop">
					<Filter />
					<ShopProducts />
				</div>
			</div>
		</section>
	)
}

export default MainShop
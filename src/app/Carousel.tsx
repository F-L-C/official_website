'use client'
import React from 'react'
import carouseldata from '../helper/carouseldata.json'
import Item from '@/components/CarouselItem'
import Carousel from 'react-material-ui-carousel'

const CarouselWithContent = () =>{
	return (
		<div className="px-40">
			<Carousel className="rounded-xl pt-40 px-50" animation='slide' indicators={false} navButtonsAlwaysVisible={true}>
				{
					carouseldata.map(item => {return (<Item key={item.id} item={item}/>)})
				}
			</Carousel>
		</div>
	)
}

export default CarouselWithContent
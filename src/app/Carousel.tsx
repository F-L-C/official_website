'use client'
import React from 'react'
import carouseldata from '../helper/carouseldata.json'
import Item from '@/components/CarouselItem'
import Carousel from 'react-material-ui-carousel'

const CarouselWithContent = () =>{
	return (
		<div className="relative px-40 fixed">
			<Carousel className="rounded-xl pt-10" animation='slide' indicators={false} navButtonsAlwaysVisible={true}>
				{
					carouseldata.map(item => {return (<Item key={item.id} item={item}/>)})
				}
			</Carousel>
		</div>
	)
}

export default CarouselWithContent
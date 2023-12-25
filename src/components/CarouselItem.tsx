'use client'
import Image from 'next/image'
import { Paper, Button } from '@mui/material'

const Item = ({item}:{item:any}) =>
{
	return (
		<>
			<Paper className='bg-transparent -z-20' elevation={0}>
				<div className="grid justify-center">
					<Image
						src={item.image} alt={item.title} width={700} height={500}
					/>
				</div>
				<div className="flex basis-auto grid place-items-center p-5">
					<h2>{item.title}</h2>
					<p>{item.descrip}</p>
				</div>
			</Paper>
		</>
	)
}

export default Item
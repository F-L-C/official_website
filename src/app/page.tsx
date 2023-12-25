import Main from './Main'
import Navbar from './Navbar'
import CarouselWithContent from './Carousel'

const HomePage = () => {
	return (
		<div className='relative'>
			<div
				className='fixed top-0 left-0 w-full h-full bg-bg bg-fixed bg-cover'
			></div>
			<div className='relative z-10'>
				<Navbar />
				<CarouselWithContent />
				<Main />
			</div>
		</div>
	)
}

export default HomePage

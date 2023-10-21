import React from 'react'
import HomeComponent from './Home'
import About from '@/components/About'
import Events from './Events'
import TeamMembersSection from './TeamSection'
import BlogSection from './Blog'

const Main = () => {
	return (
		<>
			<div className='flex justify-center items-center mt-60'>
				<div className='bg-white h-full w-3/4 text-black'>
					<HomeComponent />
					<hr className='' />
					<About />
					<hr className='' />
					<Events />
					<hr className='' />
					<TeamMembersSection />
					<hr className='' />
					<BlogSection />
				</div>
			</div>
		</>
	)
}

export default Main

import React from 'react'
import HomeComponent from '../components/Home'
import About from '@/components/About'
import Events from '../components/Events'
import TeamMembersSection from '../components/TeamSection'
import BlogSection from '../components/Blog'

const Main = () => {
	return (
		<>
			<div className='flex justify-center items-center'>
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

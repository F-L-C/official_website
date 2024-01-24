import React from 'react'
import HomeComponent from './Home'
import About from '@/components/About'
import Events from './Events'
import TeamMembersSection from './TeamSection'
import BlogSection from './Blog'

const Main = () => {
	return (
		<>
<<<<<<< HEAD:src/app/Main.tsx
			<div className='flex relative pt-20 z-30 justify-center items-center'>
=======
			<div className='flex justify-center items-center mt-60'>
>>>>>>> parent of ff4bc50 (Added nabvar and evnt carousel.):src/components/Main.tsx
				<div className='bg-white h-full w-3/4 text-black'>
					<HomeComponent />
					<hr className='' />
					<About />
					<hr className='' />
					<Events />
					<hr className='' />
					<BlogSection />
					<hr className='' />
					<TeamMembersSection />
					
				</div>
			</div>
		</>
	)
}

export default Main

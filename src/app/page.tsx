<<<<<<< HEAD
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
=======
import Image from "next/image";
import React from 'react';
import Articles from '../components/articles';
import About from '../components/about';
import Events from '../components/events';
import Contact from '../components/contacts';

export default function Home() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <h1>Foreign Language Club</h1>
      </header>
      <main>
        <Articles />
        <About />
        <Events />
        <Contact />
      </main>
    </div>
    </>
  );
}
>>>>>>> 493bc1b (Initial commit from Create Next App)

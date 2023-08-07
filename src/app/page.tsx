import Main from '../components/Main';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className='relative'>
      <div
        className="fixed top-0 left-0 w-full h-full bg-bg bg-fixed bg-cover"
      ></div>
      <div className="relative z-10">
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default HomePage;

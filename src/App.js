import './App.css';
import DefaultNavbar from './Navbar';
import Footer from './Footer';
import CardSection from './CardSection';

function App() {
  return (
    <>
      <DefaultNavbar />

      {/* Main Content */}
      <section className='bg-cover bg-center h-screen m-5 bg-img-1 flex text-center justify-center items-center'>
        <div className="bg-white-300 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-100 border border-gray-300 px-1.5 py-3 md:p-10 lg:p-16 md:rounded-md">
          <h1 className='text-7xl font-medium tracking-widest text-dark-green'>LOMBOK</h1>
          <p className='text-dark-green text-xl mt-3 tracking-widest'>HEALTH BLOG</p>
          <div className='bg-dark-green h-1 w-20 mt-5 items-center justify-center mx-auto'></div>
        </div>
      </section>

      <CardSection />

      <section className='grid grid-cols-1 md:grid-cols-2 md:py-16 h-full gap-10 w-auto bg-mint-green font-oswald text-center md:justify-center md:items-center'>
        <img className="h-auto w-full opacity-90" src="/img-5.jpg" alt="" />
        <div className='font-oswald mb-10'>
          <h1 className='text-2xl font-medium tracking-widest text-dark-green'>ABOUT</h1>
          <div className='bg-dark-green h-1 w-20 mt-5 items-center justify-center mx-auto mb-10'></div>
          <p className='mx-3 font-light text-dark-green pr-10'>Plants do more than just beautify our spaces; they contribute to our well-being. Indoor plants have the remarkable ability to improve air quality by removing toxins and providing oxygen, creating a healthier environment. Studies reveal that their presence can lower stress, elevate mood, and boost productivity. Delve into the world of plants and health with my latest blog, discovering tips on selecting, caring for, and benefiting from indoor greenery. Embrace the natural path to a healthier life.</p>
        </div>
      </section>

      <section className='grid grid-cols-1 bg-deep-green h-auto w-full text-center justify-center items-center font-oswald py-16'>
        <h1 className='text-2xl mb-2 font-medium tracking-widest text-white'>SUBSCRIBE</h1>
        <p className='text-dark-green mb-10'>Sign-up to our newsletter</p>
        <div className="max-w-lg mx-auto">
          <input type={'email'} placeholder='your@email.com' className='w-72 md:w-96 mb-10 border-none'></input>
        </div>
        <button className='mx-auto w-48 py-2 border-solid border-2 border-dark-green text-white hover:bg-dark-green'>Submit</button>
      </section>

      <Footer />

    </>
    );
}

export default App; 
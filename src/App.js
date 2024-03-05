// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Approach from './sections/Approach';
import Buisness from './sections/Buisness';
import Contact from './sections/Contact';
import Domain from './sections/Domain';
import Formula from './sections/Formula';
import GlobalBrands from './sections/GlobalBrands';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Services from './sections/Services';

function App() {
  return (
    <>
      <Header />
      <div className='bg-[#0C101A]'>
      <Hero/>
      <GlobalBrands/>
      <Buisness />
      <Domain />
      <Services />
      <Formula />
      <Mission />
      <Approach />
      <Contact />
      </div>
      <Footer/>
    </>
  );
}

export default App;

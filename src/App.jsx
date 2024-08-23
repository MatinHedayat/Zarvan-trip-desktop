import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import BannerBox from './components/BannerBox';
import CallInfo from './components/CallInfo';
import SocialMedia from './components/SocialMedia';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <main className='max-w-[1728px] mx-auto'>
      <Header />

      <section className='px-5'>
        <Nav />
        <BannerBox />
        <CallInfo />
        <SocialMedia /> 
        <ContactUs />
      </section>

      <Footer />
    </main>
  );
}

export default App;

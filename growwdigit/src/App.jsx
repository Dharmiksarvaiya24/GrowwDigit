import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { ScrollProvider } from './hooks/useScrollAnimations';

function App() {
  return (
    <ScrollProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
 
      <Footer />
    </ScrollProvider>
  );
}

export default App;

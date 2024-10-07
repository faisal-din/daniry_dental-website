import AppointmentSection from '../Components/AppointmentSection';
import CTASection from '../Components/CTASection';
import FAQSection from '../Components/FAQ';
import FAQ from '../Components/FAQ';
import Hero from '../Components/Hero';
import NewPatients from '../Components/NewPatients';
import NewsArticles from '../Components/NewsArticles';
import Services from '../Components/Services';
import SmileSection from '../Components/SmileSection';
import Specialists from '../Components/Specialists';
import Testimonials from '../Components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <NewPatients />
      <AppointmentSection />
      <SmileSection />
      <Specialists />
      <Testimonials />
      <NewsArticles />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;

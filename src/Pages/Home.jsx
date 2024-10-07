import Hero from '../Components/Hero';
import Services from '../Components/Services';
import NewPatients from '../Components/NewPatients';
import AppointmentSection from '../Components/AppointmentSection';
import SmileSection from '../Components/SmileSection';
import Specialists from '../Components/Specialists';
import Testimonials from '../Components/Testimonials';
import NewsArticles from '../Components/NewsArticles';
import FAQSection from '../Components/FAQ';
import CTASection from '../Components/CTASection';

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

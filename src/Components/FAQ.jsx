import { faqs } from '../assets/constants';
import FAQcard from './FAQcard';

const FAQSection = () => {
  return (
    <div className=' px-3 py-4 lg:px-12 lg:py-6 mt-5'>
      <div className=' flex flex-col items-center gap-4'>
        {/* Heading */}
        <div className=' w-full sm:w-2/3 lg:w-1/2 px-3 flex  flex-col gap-4 '>
          <h2 className='text-[2rem] sm:text-[2.25rem] xl:text-[2.65rem] text-darkblue font-semibold capitalize text-center'>
            Frequently Ask Question
          </h2>
          <p className=' text-lg text-black text-center '>
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </div>

        {/* FAQs */}

        <div className='w-full sm:w-2/3 lg:w-1/2 m-4 '>
          {faqs.map((faq) => (
            <FAQcard key={faq.id} faqs={faq} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;

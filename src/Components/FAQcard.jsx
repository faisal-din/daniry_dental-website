import { useState } from 'react';
import { minus, plus } from '../assets/constants';

const FAQcard = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='relative '>
      <div
        className={`flex justify-between items-center gap-10 border-b-2 pb-5 mt-10 border-darkblue 
        `}
      >
        <div className='flex items-center gap-3'>
          <div className='w-2 h-2 bg-darkblue rounded-full'></div>
          <h2 className='text-lg text-darkblue font-medium'>{faqs.question}</h2>
        </div>
        <button className='border-4 border-darkblue rounded-full'>
          <img
            onClick={() => toggleFAQ(faqs.id)}
            src={activeIndex === faqs.id ? minus : plus}
            alt='toggle icon'
            className='w-4 h-4 cursor-pointer'
          />
        </button>
      </div>

      {/* FAQ answer */}
      <div
        className={`p-4 bg-midblue text-white rounded-lg mt-2 transition-all duration-300 ease-in-out ${
          activeIndex === faqs.id ? 'block' : 'hidden'
        }`}
      >
        <p>{faqs.answer}</p>
      </div>
    </div>
  );
};

export default FAQcard;

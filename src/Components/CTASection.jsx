import { cta } from '../assets/constants';

const CTASection = () => {
  return (
    <section className=' lg:px-28 lg:py-6'>
      <div className='bg-darkblue rounded-xl flex items-center gap-16 p-12'>
        <div className='flex flex-col items-start gap-12'>
          <div>
            <h2 className='text-[2rem] sm:text-[2.25rem] xl:text-[2.65rem] text-white font-semibold capitalize'>
              Dental Website thats gonna shake the game rules up.
            </h2>

            <p className='text-lg text-white '>
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </p>
          </div>
          <div>
            <button className='block px-7 py-3 rounded-xl bg-midblue text-white text-base font-semibold '>
              Learn more
            </button>
          </div>
        </div>

        <img src={cta} alt='cta' className='object-cover rounded-xl' />
      </div>
    </section>
  );
};

export default CTASection;

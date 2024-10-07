import { new_patient } from '../assets/constants';

const SmileSection = () => {
  return (
    <section className=' px-3 py-4 sm:px-[4rem] xl:px-[8rem] mt-20 lg:py-6'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
        {/* Left Side */}
        <div className='w-full lg:w-1/2 flex  flex-col gap-8 leading-tight'>
          <h2 className='text-[2.25rem] sm:text-[2.65rem] text-darkblue font-semibold capitalize'>
            Leave your worries at the door and enjoy a healthier, more precise
            smile.
          </h2>
          <p className='text-lg text-black '>
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </p>
          <div>
            <button className='block px-7 py-3 rounded-xl bg-midblue text-white text-base font-semibold '>
              Book an Appointment
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className='relative w-full sm:w-[450px] h-[400px]  '>
          <img
            src={new_patient}
            alt='new-patients'
            className='absolute bottom-0 w-[413px] h-[362px] z-50  object-cover rounded-2xl'
          />

          <div className='hidden sm:block absolute top-0 right-0 w-[413px]  h-[362px] bg-gradient-to-bl from-skyblue to-transparent  rounded-2xl'></div>
        </div>
      </div>
    </section>
  );
};

export default SmileSection;

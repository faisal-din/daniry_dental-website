import { new_patient } from '../assets/constants';

const NewPatients = () => {
  return (
    <section className=' px-3 py-4 sm:px-[4rem] xl:px-[8rem] mt-20 lg:py-6'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-5'>
        {/* Left Side */}
        <div className='w-full lg:w-1/2 flex  flex-col gap-8 leading-tight'>
          <h2 className='text-[2.25rem] sm:text-[2.65rem] text-darkblue font-semibold capitalize'>
            We’re welcoming new patients and can’t wait to meet you.
          </h2>
          <p className='text-lg text-black '>
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </p>
          <div className='flex items-center'>
            <input
              type='text'
              placeholder='Enter your Phone Number'
              className='w-full px-3 py-3 rounded-l-2xl border border-[#CFCFCF] focus:outline-none focus:border-midblue'
            />
            <button className=' block px-7 py-3 rounded-r-2xl border border-midblue  bg-midblue text-white text-base font-semibold '>
              Submit
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className='relative w-[450px] h-[400px] p-3 '>
          <img
            src={new_patient}
            alt='new-patients'
            className='absolute bottom-0 w-full sm:w-[413px] h-[362px] z-50  object-cover rounded-2xl'
          />

          <div className='hidden sm:block absolute top-0 right-0 w-[413px]  h-[362px] bg-gradient-to-bl from-skyblue to-transparent  rounded-2xl'></div>
        </div>
      </div>
    </section>
  );
};

export default NewPatients;

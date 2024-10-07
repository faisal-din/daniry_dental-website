import { new_patient, shield } from '../assets/constants';

const AppointmentSection = () => {
  return (
    <section className=' lg:px-10 lg:py-6'>
      <div className=' px-3 py-4 mt-5 sm:px-10 xl:px-16 lg:py-12 bg-lightblue flex flex-col-reverse lg:flex-row items-center justify-between gap-16 xl:gap-24'>
        {/* left side */}
        <div>
          <img
            src={new_patient}
            alt='new-patients'
            className=' w-[414px] h-full z-50  object-cover rounded-2xl'
          />
        </div>

        {/* right side */}

        <div className='w-full lg:w-1/2 flex flex-col gap-5 leading-tight'>
          <h2 className='text-[2rem] sm:text-[2.25rem] xl:text-[2.65rem] text-darkblue font-semibold capitalize'>
            We’re welcoming new patients and can’t wait to meet you.
          </h2>
          <p className='text-lg text-black '>
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </p>
          <div className='flex flex-col  gap-3'>
            <div className='flex items-center gap-2'>
              <img src={shield} alt='' />
              <p className='text-lg text-black '>Top quality dental team</p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={shield} alt='' />
              <p className='text-lg text-black '>
                State of the art dental services
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={shield} alt='' />
              <p className='text-lg text-black '>
                Discount on all dental treatment
              </p>
            </div>
            <div className='flex items-center gap-2'>
              <img src={shield} alt='' />
              <p className='text-lg text-black '>
                Enrollment is quick and easy
              </p>
            </div>
          </div>
          <div>
            <button className='block px-7 py-3 rounded-xl bg-midblue text-white text-base font-semibold '>
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;

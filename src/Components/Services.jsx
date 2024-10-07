import { arrow_right, service1, service2, service3 } from '../assets/constants';

const Services = () => {
  return (
    <section className=' lg:px-10 lg:py-6'>
      <div className='px-3 py-4 mt-5 lg:px-10 lg:py-12 bg-lightblue grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5 sm:rounded-xl'>
        {/* service 1 */}
        <div className='px-9 py-5 flex flex-col items-center gap-4 bg-white rounded-2xl'>
          <div className='bg-skyblue w-[4.375rem] h-[4.375rem] flex justify-center items-center rounded-full '>
            <img src={service1} alt='' className='w-12 h-12 object-cover ' />
          </div>
          <h4 className='text-2xl text-darkblue font-medium'>
            Root Canal Treatment
          </h4>

          <p className='text-lg text-black text-center '>
            Root canal treatment (endodontics) is a dental procedure used to
            treat infection at the centre of a tooth.
          </p>

          <div className='flex items-center gap-3 cursor-pointer'>
            <p className='text-base text-darkblue font-medium underline'>
              Learn more
            </p>
            <img src={arrow_right} alt='arrow-right' className='w-5 h-5' />
          </div>
        </div>

        {/* service 2 */}
        <div className='px-9 py-5 flex flex-col items-center gap-4 bg-white rounded-2xl'>
          <div className='bg-skyblue w-[4.375rem] h-[4.375rem] flex justify-center items-center rounded-full '>
            <img src={service2} alt='' className='w-12 h-12 object-cover ' />
          </div>
          <h4 className='text-2xl text-darkblue font-medium'>
            Cosmetic Dentist
          </h4>

          <p className='text-lg text-black text-center '>
            Cosmetic dentistry is the branch of dentistry that focuses on
            improving the appearance of your smile.
          </p>

          <div className='flex items-center gap-3 cursor-pointer'>
            <p className='text-base text-darkblue font-medium underline'>
              Learn more
            </p>
            <img src={arrow_right} alt='arrow-right' className='w-5 h-5' />
          </div>
        </div>

        {/* service 3 */}
        <div className='px-9 py-5 hidden lg:flex flex-col items-center gap-4 bg-white rounded-2xl'>
          <div className='bg-skyblue w-[4.375rem] h-[4.375rem] flex justify-center items-center rounded-full '>
            <img src={service3} alt='' className='w-12 h-12 object-cover ' />
          </div>
          <h4 className='text-2xl text-darkblue font-medium'>
            Dental Implants
          </h4>

          <p className='text-lg text-black text-center '>
            A dental implant is an artificial tooth root that’s placed into your
            jaw to hold a prosthetic tooth or bridge.
          </p>

          <div className='flex items-center gap-3 mt-2 cursor-pointer'>
            <p className='text-base text-darkblue font-medium underline'>
              Learn more
            </p>
            <img src={arrow_right} alt='arrow-right' className='w-5 h-5' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

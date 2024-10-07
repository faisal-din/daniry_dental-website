import { LinkedIn, specialists, waves } from '../assets/constants';

const Specialists = () => {
  return (
    <section className='relative overflow-hidden bg-lightblue w-full  py-10 mt-20'>
      <div className='relative z-20 flex flex-col items-center justify-center gap-16'>
        <div className=' z-10 relative w-full sm:w-[450px] px-3 flex items-center justify-center flex-col gap-5 '>
          <h2 className='text-[2rem] sm:text-[2.25rem] xl:text-[2.65rem] text-darkblue font-semibold capitalize'>
            Meet our specialists
          </h2>
          <p className=' text-lg text-black text-center '>
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5'>
          {specialists.slice(0, 3).map((specialist) => (
            <div key={specialist.id} className='relative'>
              <img
                src={specialist.img}
                alt=''
                className='w-[305px] h-[340px] object-cover rounded-2xl'
              />
              <div className='specialist absolute bottom-5 left-5  px-8 py-4 rounded-2xl  '>
                <h4 className='text-2xl text-white font-medium'>
                  {specialist.name}
                </h4>
                <p className='text-lg text-white font-medium'>
                  {specialist.occupation}
                </p>
              </div>

              <div className='absolute top-4 right-4'>
                <img src={LinkedIn} alt='' />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* waves */}
      <div className='absolute top-0 left-0 w-full h-full z-10'>
        <img src={waves} alt='waves' className='w-full h-full object-cover' />
      </div>
    </section>
  );
};

export default Specialists;

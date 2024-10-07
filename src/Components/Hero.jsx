import { avatar, heroImg, phone, teeth } from '../assets/constants';

const Hero = () => {
  return (
    <section className='px-3 py-4 lg:px-10 lg:py-6 flex flex-col lg:flex-row items-center justify-between gap-10'>
      {/* hero content  */}
      <div className='hero-content w-full flex flex-col items-start gap-8'>
        <h1 className='text-[2.65rem] lg:text-[3rem] xl:text-[3.88rem] mt-3 text-darkblue capitalize font-semibold leading-none text- lg:text-start'>
          Get ready for your best ever Dental Experience!
        </h1>
        <p className='text-lg text-black text-center lg:text-start'>
          We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself.
        </p>

        {/* CTA */}
        <div className='flex flex-col-reverse sm:flex-row  items-center gap-5 '>
          <button className='w-full block px-7 py-3 rounded-xl bg-midblue text-white text-base font-semibold '>
            Book an Appointment
          </button>
          <div className='w-full flex items-center gap-4'>
            <div className='bg-lightblue border border-midblue p-3 rounded-xl'>
              <img src={phone} alt='' className='w-5 h-5 cursor-pointer' />
            </div>
            <div>
              <h3 className='text-sm text-midblue font-semibold mb-1'>
                Dental 24H Emergency
              </h3>
              <p className='text-sm text-darkblue font-medium'>0900-78601</p>
            </div>
          </div>
        </div>

        {/* profile  */}

        <div className='w-full sm:w-2/3 bg-white flex flex-col gap-4 px-4 py-3 mt-4 rounded-2xl shadow-lg'>
          <div className='flex items-center gap-2'>
            <img
              src={avatar}
              alt=''
              className='w-10 h-10 rounded-full cursor-pointer'
            />
            <div>
              <h3 className='text-sm text-darkblue font-medium'>
                Thomas daniel
              </h3>
              <p className='text-sm text-darkblue '>Sr Dental</p>
            </div>
          </div>

          <p>
            Top Quailty dental treatment done by field experts, Highly
            Recommended for everyone
          </p>
        </div>
      </div>

      {/* hero image  */}

      <div className='hero-image relative'>
        <div className='absolute z-10 right-10'>
          <img
            src={heroImg}
            alt='heroImg'
            className='w-full h-[550pxpx] object-cover'
          />
        </div>
        <div className='relative  flex lg:w-[400px] xl:w-[500px] aspect-square border-2   border-dashed border-midblue rounded-full  scale:75 md:scale-100'>
          {/* outer border */}
          <div>
            {/* teeth 1 */}
            <div className='absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-[0deg]'>
              <div
                className={`relative -top-[1.3rem] flex w-[2.5rem] h-[2.5rem] bg-skyblue border   rounded-full -rotate-0`}
              >
                <img className='m-auto' alt='teeth' src={teeth} />
              </div>
            </div>

            {/* teeth 2 */}
            <div className='absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-[120deg]'>
              <div
                className={`relative -top-[1.3rem] flex  w-[2.5rem] h-[2.5rem] bg-skyblue border   rounded-full -rotate-[120deg]`}
              >
                <img
                  className='m-auto'
                  width={26}
                  height={24}
                  alt='teeth'
                  src={teeth}
                />
              </div>
            </div>

            {/* teeth 3 */}

            <div className='absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-[240deg]'>
              <div
                className={`relative -top-[1.3rem] flex  w-[2.5rem] h-[2.5rem] bg-skyblue border   rounded-full -rotate-[240deg]`}
              >
                <img
                  className='m-auto'
                  width={26}
                  height={24}
                  alt='teeth'
                  src={teeth}
                />
              </div>
            </div>
          </div>

          {/* inner border */}

          <div className='relative flex w-[18rem]  aspect-square m-auto border border-midblue rounded-full'>
            {/* teeth 1 */}
            <div className='absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-[60deg]'>
              <div
                className={`relative -top-[1.3rem] flex w-[2.5rem] h-[2.5rem] bg-skyblue border   rounded-full -rotate-[60deg]`}
              >
                <img className='m-auto' alt='teeth' src={teeth} />
              </div>
            </div>

            {/* teeth 2 */}
            <div className='absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-[180deg]'>
              <div
                className={`relative -top-[1.3rem] flex  w-[2.5rem] h-[2.5rem] bg-skyblue border   rounded-full -rotate-[180deg]`}
              >
                <img
                  className='m-auto'
                  width={26}
                  height={24}
                  alt='teeth'
                  src={teeth}
                />
              </div>
            </div>

            {/* teeth 3 */}
            <div className='absolute top-0 left-1/2 h-1/2 -ml-[1.3rem] origin-bottom rotate-[300deg]'>
              <div
                className={`relative -top-[1.3rem] flex  w-[2.5rem] h-[2.5rem] bg-skyblue border   rounded-full -rotate-[300deg]`}
              >
                <img
                  className='m-auto'
                  width={26}
                  height={24}
                  alt='teeth'
                  src={teeth}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

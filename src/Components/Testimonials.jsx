import { avatar1, star, testimonials } from '../assets/constants';

const Testimonials = () => {
  return (
    <div className=' px-5 lg:px-12 py-10 mt-10'>
      <div className='flex flex-col items-center justify-center gap-16'>
        <div className=' z-10 relative w-full sm:w-[450px] px-3 flex items-center justify-center flex-col gap-5 '>
          <h2 className='text-[2rem] sm:text-[2.25rem] xl:text-[2.65rem] text-darkblue font-semibold capitalize'>
            Our Happy Clients
          </h2>
          <p className=' text-lg text-black text-center '>
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-5'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='w-full  bg-white flex flex-col gap-4 px-6 py-5 mt-4 rounded-2xl shadow-xl'
            >
              <div className='flex items-center gap-3'>
                <img
                  src={testimonial.img}
                  alt=''
                  className='w-16 h-16 object-cover rounded-full cursor-pointer'
                />
                <div>
                  <h3 className='text-2xl text-darkblue font-medium'>
                    {testimonial.name}
                  </h3>
                  <div className='flex items-center gap-1'>
                    <img
                      src={star}
                      alt='star'
                      className='w-5 h-5 object-cover '
                    />
                    <img
                      src={star}
                      alt='star'
                      className='w-5 h-5 object-cover '
                    />
                    <img
                      src={star}
                      alt='star'
                      className='w-5 h-5 object-cover '
                    />
                    <img
                      src={star}
                      alt='star'
                      className='w-5 h-5 object-cover '
                    />
                    <img
                      src={star}
                      alt='star'
                      className='w-5 h-5 object-cover '
                    />
                  </div>
                </div>
              </div>

              <p>{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

import { articlesInfo } from '../assets/constants';
import AritecleCard from './AritecleCard';

const NewsArticles = () => {
  return (
    <div className='px-3 py-4 lg:px-12 lg:py-6 mt-5'>
      <div>
        {/* Heading */}
        <div className='flex justify-between gap-5'>
          <div className=' w-full sm:w-[450px] px-3 flex  flex-col gap-4 '>
            <h2 className='text-[2rem] sm:text-[2.25rem] xl:text-[2.65rem] text-darkblue font-semibold capitalize'>
              News & Articles
            </h2>
            <p className=' text-lg text-black  '>
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </p>
          </div>

          <div className='hidden  sm:flex items-end pr-10'>
            <button className='block px-7 py-3 rounded-xl bg-midblue text-white text-base font-semibold '>
              View All
            </button>
          </div>
        </div>

        {/* Articles */}

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
          {articlesInfo.slice(0, 4).map((article) => (
            <AritecleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Button */}
        <div className='flex items-center justify-center mt-10'>
          <button className='block px-7 py-3 rounded-xl bg-midblue text-white text-base font-semibold '>
            Check out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsArticles;

const AritecleCard = ({ article }) => {
  return (
    <div className='w-full sm:w-[350px] lg:w-[300px] bg-lightblue flex flex-col gap-4 px-4 py-5 mt-4 rounded-xl shadow-xl'>
      <div className='flex items-center gap-3'>
        <img
          src={article.image}
          alt='article1'
          className='w-full h-56 object-cover rounded-xl cursor-pointer transition-all ease-in-out duration-300 transform hover:scale-95'
        />
      </div>

      <div className='flex items-end pr-10'>
        <button className='block px-5 py-2 rounded-xl bg-darkblue text-white text-base font-semibold '>
          {article.tag}
        </button>
      </div>
      <h3 className='text-xl text-darkblue font-medium'>{article.title}</h3>

      <p className='text-black text-base'>{article.description}</p>

      <p className='text-black text-base text-end'>~{article.author}</p>
    </div>
  );
};

export default AritecleCard;

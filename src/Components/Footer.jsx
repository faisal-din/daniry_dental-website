import { NavLink } from 'react-router-dom';
import {
  facebook,
  instagram,
  LinkedIn,
  logo,
  twitter,
  youtube,
} from '../assets/constants';

const Footer = () => {
  return (
    <section className=' px-3 py-4 lg:px-12 lg:py-6 mt-14'>
      <div>
        <div className='flex flex-col sm:flex-row   justify-between gap-5'>
          {/* logo */}
          <NavLink to='/'>
            <div
              onClick={() => {
                scrollTo(0, 0);
              }}
              className='flex items-center gap-3 cursor-pointer'
            >
              <img src={logo} alt='' className='w-6 h-6' />
              <p className='text-darkblue font-bold'>DANIRY</p>
            </div>
          </NavLink>

          <ul className='flex  items-center gap-4 sm:gap-10 text-darkblue text-base font-medium  '>
            <NavLink to='/'>
              <div
                onClick={() => {
                  scrollTo(0, 0);
                }}
              >
                <p>Home</p>
              </div>
            </NavLink>

            <NavLink to='/services'>
              <div
                onClick={() => {
                  scrollTo(0, 0);
                }}
              >
                <p>Services</p>
              </div>
            </NavLink>

            <NavLink to='/blogs'>
              <div
                onClick={() => {
                  scrollTo(0, 0);
                }}
              >
                <p>Blogs</p>
              </div>
            </NavLink>

            <NavLink to='/about'>
              <div
                onClick={() => {
                  scrollTo(0, 0);
                }}
              >
                <p>About</p>
              </div>
            </NavLink>

            <NavLink to='/contact'>
              <div
                onClick={() => {
                  scrollTo(0, 0);
                }}
              >
                <p>Contact</p>
              </div>
            </NavLink>
          </ul>
        </div>

        <div className='bg-darkblue w-full h-[2px] mt-10 px-2'></div>

        <div className='flex flex-col-reverse sm:flex-row  justify-between gap-5 mt-10'>
          <p className='text-darkblue text-base font-medium '>
            All rights reserved ® daniry.com | Terms and conditions apply!
          </p>
          <div className='flex gap-5 items-center'>
            <img src={facebook} alt='' className='w-8 h-8 cursor-pointer' />
            <img src={instagram} alt='' className='w-8 h-8 cursor-pointer' />
            <img src={youtube} alt='' className='w-8 h-8 cursor-pointer' />
            <img src={LinkedIn} alt='' className='w-8 h-8 cursor-pointer' />
            <img src={twitter} alt='' className='w-8 h-8 cursor-pointer' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

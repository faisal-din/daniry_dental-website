import { Link, NavLink } from 'react-router-dom';
import { close, hamburger, logo } from '../assets/constants';
import { useState } from 'react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <nav>
      <div className='lg:px-10 lg:py-6'>
        <div className='px-3 sm:px-10 py-4 max-w-full bg-lightblue flex items-center  justify-between lg:rounded-xl'>
          <Link to='/'>
            <div className='flex items-center gap-3'>
              <img src={logo} alt='' className='w-6 h-6' />
              <p className='text-darkblue font-bold'>DANIRY</p>
            </div>
          </Link>

          <ul className='hidden lg:flex mx-auto items-center gap-9  text-darkblue text-base font-medium  '>
            <NavLink to='/'>
              <div className=' group hover:w-full '>
                <p>Home</p>
                <hr className='hidden w-1/5 border-none h-[1.5px] bg-darkblue group-hover:w-full transition-all ease duration-300 ' />
              </div>
            </NavLink>

            <NavLink to='/services'>
              <div className=' group hover:w-full '>
                <p>Services</p>
                <hr className='hidden w-1/5 border-none h-[1.5px] bg-darkblue group-hover:w-full transition-all ease duration-300 ' />
              </div>
            </NavLink>

            <NavLink to='/blogs'>
              <div className=' group hover:w-full '>
                <p>Blogs</p>
                <hr className='hidden w-1/5 border-none h-[1.5px] bg-darkblue group-hover:w-full transition-all ease duration-300 ' />
              </div>
            </NavLink>

            <NavLink to='/about'>
              <div className=' group hover:w-full '>
                <p>About</p>
                <hr className='hidden w-1/5 border-none h-[1.5px] bg-darkblue group-hover:w-full transition-all ease duration-300 ' />
              </div>
            </NavLink>

            <NavLink to='/contact'>
              <div className=' group hover:w-full '>
                <p>Contact</p>
                <hr className='hidden w-1/5 border-none h-[1.5px] bg-darkblue group-hover:w-full transition-all ease duration-300 ' />
              </div>
            </NavLink>
          </ul>

          <div className='flex items-center gap-4  lg:gap-1'>
            <Link to='/login'>
              <div className='hidden md:block px-6 py-2 text-darkblue text-base font-semibold  '>
                Login
              </div>
            </Link>

            <Link to='/signup'>
              <div className='hidden md:block px-7 py-3 rounded-xl bg-midblue text-white text-base font-semibold '>
                Signup
              </div>
            </Link>

            {/* Hamburgur menu */}
            <button className=' relative block lg:hidden bg-midblue px-3 py-3 rounded-xl'>
              <img
                onClick={toggleMenu}
                src={visible ? close : hamburger}
                alt=''
                className='w-5 h-5 cursor-pointer'
              />
            </button>
          </div>
        </div>
      </div>

      {/* toggle Menu  */}
      <div
        className={` toggleMenu bg-lightblue  text-darkblue  ${
          visible ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className='flex flex-col justify-center items-center py-5 gap-5'>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            to='/'
            className='text-2xl '
          >
            <p>Home</p>
            <hr className='hidden w-full border-none h-[1.5px] bg-darkblue  ' />
          </NavLink>

          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            to='/services'
            className='text-2xl '
          >
            <p>Services</p>
            <hr className='hidden w-full border-none h-[1.5px] bg-darkblue  ' />
          </NavLink>

          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            to='/blogs'
            className='text-2xl '
          >
            <p>Blogs</p>
            <hr className='hidden w-full border-none h-[1.5px] bg-darkblue  ' />
          </NavLink>

          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            to='/about'
            className='text-2xl '
          >
            <p>About</p>
            <hr className='hidden w-full border-none h-[1.5px] bg-darkblue  ' />
          </NavLink>

          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            to='/contact'
            className='text-2xl '
          >
            <p>Contact</p>
            <hr className='hidden w-full border-none h-[1.5px] bg-darkblue  ' />
          </NavLink>
        </div>
      </div>
    </nav>

    // <div className=''>
    //   <div>
    //     <div className='bg-darkblue  py-[1.13rem] max-w-full'>
    //       <div className='flex items-center justify-between'>
    //         <Link to='/'>
    //           <div className='flex items-center gap-3'>
    //             <img src={logo} alt='' className='w-8 h-8' />
    //             <p>DANIRY</p>
    //           </div>
    //         </Link>

    //         <ul className='hidden lg:flex justify-center items-center gap-3 text-white text-lg font-worksans  '>
    //           <NavLink to='/'>Home</NavLink>
    //           <NavLink to='/about-us'>About us</NavLink>
    //           <NavLink to='/services'>Services</NavLink>
    //           <NavLink to='/doctors'>Doctors</NavLink>
    //           <NavLink to='/news'>News</NavLink>
    //           <NavLink to='/contact-us'>Contact</NavLink>
    //         </ul>

    //         <div className='flex items-center gap-5'>
    //           <NavLink to='/appointment'>
    //             <div className='hidden lg:block  px-9 py-2 rounded-3xl'>
    //               Appointment
    //             </div>
    //           </NavLink>

    //           {/* Hamburgur menu */}
    //           {/* <button className=' relative block lg:hidden'>
    //             <img
    //               onClick={toggleMenu}
    //               src={visible ? close : hamBurgerMenu}
    //               alt=''
    //               className='w-5 h-5 cursor-pointer'
    //             />
    //           </button> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;

import { headerLinks } from '../utils/constants';
import Nav from './Nav';

export default function Header() {
  return (
    <>
      {/* Mobile version */}
      <header className='bg-[--dark-clr] h-36 flex-center xl:hidden'>
        <div className='flex-center gap-x-3'>
          <h1 className='text-white text-[1.35rem] font-bold font-inter uppercase tracking-[0.2rem]'>zarvantrip</h1>
          <div className='w-0.5 h-6 bg-[#48486A] rounded-xl' />
          <img src='/svg/logo.svg' alt='logo' className='w-10' />
        </div>
      </header>

      {/* Desktop version */}
      <div className='bg-white h-20 px-5 items-center justify-between hidden xl:flex'>
        <div className='flex-center gap-x-2'>
          <div className='relative bg-zinc-800 p-2 border-2 border-zinc-500 rounded-lg after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-1 after:bg-[--orange-clr]'>
            <img src='/svg/logo.svg' alt='logo' />
          </div>

          <div className='text-sm font-bold space-y-0'>
            <h1 className='uppercase tracking-[0.1rem]'>zarvantrip</h1>
            <h1 className='text-[0.75rem]'>هتلداری زروان تریپ</h1>
          </div>
        </div>

        <ul className='text-[0.8rem] font-bold flex items-center gap-x-8'>
          {headerLinks.map((link) => (
            <li key={link}>
              <a href='#'>{link}</a>
            </li>
          ))}
        </ul>

        <div className='h-10 flex gap-x-3'>
          <button className='bg-[--dark-clr] w-10 flex-center rounded-lg'>
            <img src='/svg/call-calling-white.svg' alt='call-img' className='w-5' />
          </button>

          <button className='bg-[--dark-clr] w-10 flex-center rounded-lg'>
            <img src='/svg/star.svg' alt='call-img' className='w-5' />
          </button>

          <button className='bg-[--dark-clr] px-4 flex-center gap-x-3 rounded-lg'>
            <img src='/svg/profile-user-white.svg' alt='call-img' className='w-5' />
            <span className='text-white text-[0.8rem]'>ورود به حساب</span>
          </button>
        </div>
      </div>
    </>
  );
}

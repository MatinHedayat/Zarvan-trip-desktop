export default function Nav() {
  return (
    <div className='bg-white w-full h-14 flex items-center gap-x-3 justify-end p-2 -mt-7 rounded-lg xl:hidden'>
      <button className='nav-btn ml-auto'>
        <img src='/svg/category.svg' alt='profile-user' className='w-[1.35rem]' />
      </button>

      <button className='nav-btn'>
        <img src='/svg/call-calling.svg' alt='profile-user' className='w-[1.35rem]' />
      </button>

      <button className='nav-btn'>
        <img src='/svg/search-status.svg' alt='profile-user' className='w-[1.5rem]' />
      </button>

      <div className='w-0.5 h-6 bg-[#cccccc] rounded-xl' />

      <button className='nav-btn'>
        <img src='/svg/profile-user.svg' alt='profile-user' className='w-[1.35rem]' />
      </button>
    </div>
  );
}

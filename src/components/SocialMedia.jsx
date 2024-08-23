import React from 'react';
import { socialMedias } from '../utils/constants';

export default function SocialMedia() {
  return (
    <div className='text-[0.85rem] font-bold mt-10 xl:mt-14'>
      <div className='flex items-center gap-x-2'>
        <div className='relative bg-[--dark-clr] w-8 h-8 rounded-lg xl:w-10 xl:h-10'>
          <div className='absolute w-full h-full -right-[6px] -bottom-[6px] flex-center bg-[#6E6E87] backdrop-blur-[20px] border border-zinc-400 rounded-lg'>
            <img src='/svg/monitor.svg' alt='monitor-img' className='w-4 xl:w-5' />
          </div>
        </div>

        <h5 className='xl:text-base'>سوشیال مدیا زروان تریپ</h5>
      </div>

      <div className='flex flex-wrap flex-col gap-3 mt-6 xl:text-[0.9rem] min-[700px]:flex-row min-[700px]:gap-4 xl:gap-x-8'>
        {socialMedias.map((media) => (
          <div
            key={media.id}
            className='bg-white h-[4.5rem] p-5 pr-0 pl-6 flex gap-x-4 rounded-lg min-[700px]:w-[48%] xl:w-[31%] xl:h-[5.5rem]'
          >
            <div className='w-[3px] bg-[--orange-clr] rounded-xl' />

            <div
              className='relative bg-[--dark-clr] w-8
             rounded-md xl:w-12 xl:rounded-lg'
            >
              <div className='absolute w-full h-full -right-[6px] -top-[6px] bg-gray-500/10 backdrop-blur-[20px] flex-center border border-zinc-300 rounded-md xl:rounded-lg'>
                <img src={media.icon} alt='media-img' className='w-[18px] xl:w-6' />
              </div>
            </div>

            <div className='flex-center gap-x-2'>
              <span className='font-medium xl:font-bold'>{media.name}</span> :<span>{media.value}</span>
            </div>

            <button className='mr-auto'>
              <img src='/svg/arrow-left.svg' alt='arrow-left-img' />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

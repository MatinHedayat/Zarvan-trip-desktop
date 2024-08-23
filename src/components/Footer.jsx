import React from 'react';
import { footerLinks } from '../utils/constants';

export default function Footer() {
  return (
    <footer className='relative bg-[--dark-clr] text-white text-[0.8rem] px-5 pt-6 pb-[190px] mt-10 flex flex-col gap-8 border-t-8 border-[--orange-clr] xl:pb-[150px] xl:flex-row xl:flex-wrap xl:pt-12 xl:gap-y-4'>
      <div className='space-y-3 xl:w-[48%] xl:text-[0.9rem]'>
        <div className='flex items-center gap-x-3'>
          <div className='bg-[#343445] p-3 border-2 border-white/10 rounded-md'>
            <img src='/svg/logo.svg' alt='logo' className='' />
          </div>

          <div className='space-y-1'>
            <h6>زروان تریپ</h6>
            <div>Agency Zarvantrip Hotel</div>
          </div>
        </div>

        <p className='text-zinc-300 font-normal'>
          لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم
          لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم لورم اپیسوم اپیسوم لورم اپیسوم لورم اپیسوم لورم.
        </p>
      </div>

      <div className='flex gap-x-3 min-[500px]:gap-4 xl:w-[48%] xl:order-4 xl:justify-end xl:items-end'>
        <button className='bg-[--orange-clr] px-4 py-2 ml-4 gap-x-2 hidden rounded-lg xl:flex-center'>
          <span>برو به بالا</span>
          <img src='/svg/arrow-up.svg' alt='instagram-img' className='w-6' />
        </button>

        <div className='bg-white p-3 flex-center rounded-lg min-[500px]:flex-1 xl:h-fit xl:px-4'>
          <img src='/svg/logo-enamad.svg' alt='logo-enamad' className='w-12' />
        </div>
        <div className='bg-white p-3 flex-center rounded-lg min-[500px]:flex-1 xl:h-fit xl:px-4'>
          <img src='/svg/logo-enamad.svg' alt='logo-enamad' className='w-12' />
        </div>
        <div className='bg-white p-3 flex-center rounded-lg min-[500px]:flex-1 xl:h-fit xl:px-4'>
          <img src='/svg/logo-enamad.svg' alt='logo-enamad' className='w-12' />
        </div>
        <div className='bg-white p-3 flex-center rounded-lg min-[500px]:flex-1 xl:h-fit xl:px-4'>
          <img src='/svg/logo-enamad.svg' alt='logo-enamad' className='w-12' />
        </div>
      </div>

      <div className='text-[0.65rem]/4 flex flex-col gap-4 xl:w-[48%] xl:order-2 xl:flex-row-reverse'>
        <div className='h-14 flex gap-x-2 min-[500px]:gap-4 xl:grid'>
          <button className='bg-[--orange-clr] w-12 flex-center rounded-lg xl:hidden'>
            <img src='/svg/arrow-up.svg' alt='instagram-img' className='w-6' />
          </button>

          <div className='w-[300px] flex gap-3 grid-cols-2 grid-row-2 min-[500px]:flex-1 min-[500px]:gap-4 xl:grid xl:w-fit'>
            <button className='bg-[#343445] w-[25%] flex-center rounded-lg xl:w-20 xl:h-20'>
              <img src='/svg/linkdin.svg' alt='instagram-img' className='w-6 xl:w-8' />
            </button>
            <button className='bg-[#343445] w-[25%] flex-center rounded-lg xl:w-20 xl:h-20'>
              <img src='/svg/whats-up.svg' alt='instagram-img' className='w-6 xl:w-8' />
            </button>
            <button className='bg-[#343445] w-[25%] flex-center rounded-lg xl:w-20 xl:h-20'>
              <img src='/svg/instagram.svg' alt='instagram-img' className='w-6 xl:w-8' />
            </button>
            <button className='bg-[#343445] w-[25%] flex-center rounded-lg xl:w-20 xl:h-20'>
              <img src='/svg/telegram.svg' alt='instagram-img' className='w-6 xl:w-8' />
            </button>
          </div>
        </div>

        <div className='space-y-3'>
          <div className='h-[54px] flex gap-2 min-[500px]:gap-4 xl:h-[56px]'>
            <button className='bg-[--orange-clr] w-12 flex-center rounded-lg'>
              <img src='/svg/location.svg' alt='instagram-img' className='w-6' />
            </button>

            <div className='bg-[#343445] w-[300px] px-4 flex items-center rounded-lg min-[500px]:flex-1'>
              بلوار فردوس خیابان ولیعصر کوچه تقدیری شرقی پلاک 6 واحد 7
            </div>
          </div>

          <div className='h-[54px] flex gap-2 min-[500px]:gap-4 xl:h-[56px]'>
            <button className='bg-[--orange-clr] w-12 flex-center rounded-lg'>
              <img src='/svg/call-calling-white.svg' alt='instagram-img' className='w-5' />
            </button>

            <div className='bg-[#343445] w-[300px] px-4 flex items-center rounded-lg min-[500px]:flex-1'>
              021 - 7756938
            </div>
          </div>

          <div className='h-[54px] flex gap-2 min-[500px]:gap-4 xl:h-[56px]'>
            <button className='bg-[--orange-clr] w-12 flex-center rounded-lg'>
              <img src='/svg/sms.svg' alt='instagram-img' className='w-6' />
            </button>

            <div className='bg-[#343445] w-[300px] px-4 flex items-center rounded-lg min-[500px]:flex-1'>
              Zarvantrip@gmail.com
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-around gap-x-8 xl:w-[48%] xl:order-3 xl:justify-start xl:gap-x-24'>
        <div>
          <span className='font-bold'>دسترسی سریع</span>
          <ul className='text-[0.7rem] pr-[14px] list-disc space-y-3 mt-3'>
            {footerLinks.map((link) => (
              <li key={link} className='[&:nth-child(3)]:text-[--orange-clr]'>
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className='font-bold'>خدمات شرکت</span>
          <ul className='text-[0.7rem] pr-[14px] list-disc space-y-3 mt-3'>
            {footerLinks.map((link) => (
              <li key={link} className='[&:nth-child(2)]:text-[--orange-clr]'>
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className='font-bold'>زروان تریپ</span>
          <ul className='text-[0.7rem] pr-[14px] list-disc space-y-3 mt-3'>
            {footerLinks.map((link) => (
              <li key={link} className='[&:nth-child(4)]:text-[--orange-clr]'>
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='absolute bottom-0 inset-x-0 bg-[#343445] px-5 flex flex-col items-center justify-between gap-y-3 pt-8 pb-12 xl:flex-row-reverse xl:py-8'>
        <span className='text-base font-bold'>
          Design & Develop By <span className='text-[--orange-clr]'>Sevin Team</span>
        </span>

        <p className='xl:hidden'>تمامی حقوق این وبسایت متعلق به زروان تریپ می باشد.</p>
        <p className='hidden xl:block'>
          تمامی حقوق مادی و معنوی این سایت متعلق به شرکت گردشگری و مسافرتی زروان تریپ مهر آریا میباشد
        </p>
      </div>
    </footer>
  );
}

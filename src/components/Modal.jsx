import React from 'react';

export default function Modal({ modalIsOpen, closeModal }) {
  return (
    <>
      <div
        className={`fixed z-50 inset-0 bg-black/20 backdrop-blur-sm transition-all duration-300 ${
          modalIsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeModal}
      />

      <div
        className={`fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[90%] max-w-[22rem] flex flex-col items-center justify-center p-8 rounded-2xl transition-all duration-300 ${
          modalIsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className='relative w-14 h-12 bg-[#1E8E29] rounded-lg shadow-xl shadow-[#1E8E29]/30 xl:w-20 xl:h-16'>
          <div className='absolute w-full h-full flex-center -right-2.5 -top-2 bg-white/20 backdrop-blur-[20px] border-2 border-white/80 rounded-lg'>
            <img src='/svg/verify.svg' alt='check-img' className='w-8 xl:w-11' />
          </div>
        </div>

        <span className='text-center text-base xl:text-xl mt-8 mb-3'>پیام شما با موفقیت ارسال شد</span>
        <p className='text-center text-[#676767] xl:text-[0.9rem]'>
          مشتری گرامی علیرضا آذرخش عزیز
          <br /> به زودی با شما تماس گرفته خواهد شد با تشکر.
        </p>

        <button
          className='bg-[#1E8E29] text-white font-medium px-6 py-2.5 mt-9 rounded-lg xl:py-3 xl:px-8'
          onClick={closeModal}
        >
          متوجه شدم
        </button>
      </div>
    </>
  );
}

import React, { useState } from 'react';
import Modal from './Modal';

export default function ContactUs() {
  const [modalIsOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => setModalOpen(false);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div className='text-[0.85rem] font-bold mt-12'>
      <div className='flex items-center gap-x-2'>
        <div className='relative bg-[--dark-clr] w-8 h-8 rounded-lg xl:w-10 xl:h-10'>
          <div className='absolute w-full h-full -right-[6px] -bottom-[6px] flex-center bg-[#6E6E87] backdrop-blur-[20px] border border-zinc-400 rounded-lg'>
            <img src='/svg/direct.svg' alt='monitor-img' className='w-4' />
          </div>
        </div>

        <h5 className='xl:text-base'>تماس با شبکه زروان تریپ</h5>
      </div>

      <p className='mt-4 mb-5'>
        <span className='text-base text-[--orange-clr]'>*</span> دوست داریم نظرات و پیشنهادات شما رو بشنویم پیام‌هایتان
        را با ما در میان بذارید.
      </p>

      <form
        onSubmit={handleSubmitForm}
        className='relative text-[0.75rem] flex flex-col gap-y-4 xl:flex-row xl:gap-x-8 xl:pb-16'
      >
        <div className='space-y-4 xl:w-[40%]'>
          <input type='text' placeholder='* موضوع مورد نظر خود را وارد نمایید' className='form-input' />

          <div className='bg-[#ff4500]/10 h-14 text-[--orange-clr] flex items-center px-5 border-2 border-[--orange-clr] rounded-lg'>
            پرهام رحیمی
          </div>

          <input type='text' placeholder='* شماره موبایل خود را وارد نمایید' className='form-input' />

          <input type='text' placeholder='* ایمیل خود را وارد نمایید' className='form-input' />
        </div>

        <div className='xl:w-[60%]'>
          <textarea
            name='description'
            id='desc'
            placeholder='* توضیحات خود را وارد نمایید ...'
            className='form-input w-full min-h-40 py-6 xl:min-h-0 xl:h-full'
          ></textarea>
        </div>

        <button className='bg-[--orange-clr] text-white font-medium w-fit px-5 py-3 rounded-lg xl:px-8 xl:absolute xl:right-0 xl:bottom-0'>
          ارسال پیام
        </button>
      </form>

      <Modal modalIsOpen={modalIsOpen} closeModal={handleCloseModal} />
    </div>
  );
}

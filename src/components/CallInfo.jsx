export default function CallInfo() {
  return (
    <article className='flex flex-col gap-4 mt-8 xl:flex-row-reverse'>
      <div className='bg-white p-2.5 rounded-2xl xl:w-[40%]'>
        <img src='/svg/hero.svg' alt='her-back' className='w-full' />
      </div>

      <div className='relative bg-white flex flex-col justify-between gap-8 p-5 rounded-2xl xl:w-[60%] xl:py-7'>
        <div className='flex gap-6 xl:flex-col xl:gap-8'>
          <InfoSection title='شماره تماس 1 :' desc='021 - 22347608' className='w-1/2' />
          <InfoSection title='شماره تماس 2 :' desc='021 - 22347613' className='w-1/2' />
        </div>

        <div className='flex flex-col gap-8 xl:flex-row xl:gap-12'>
          <InfoSection title='شماره همراه :' desc='+98 - 9912346052' />
          <InfoSection
            title='آدرس شرکت :'
            desc='تهران، بلوار فردوس، خیابان تقدیری شرقی، پلاک 6، واحد 7'
            isAddress={true}
          />
        </div>

        <div className='bg-[--dark-clr]  text-center text-white text-[0.7rem] font-medium py-3 rounded-lg xl:w-fit xl:absolute xl:top-5 xl:left-5 xl:mt-0 xl:text-[0.8rem] xl:px-12'>
          (ساعت پاسخگویی 24 ساعته, 7 روز هفته)
        </div>
      </div>
    </article>
  );
}

function InfoSection(props) {
  const { title, desc, className, isAddress = false } = props;

  return (
    <div className={`text-[0.85rem] font-bold space-y-2 xl:text-[0.9rem] ${className}`}>
      <div className='flex gap-x-2.5'>
        <div className='w-1 bg-[--orange-clr] rounded-xl' />
        <span className='text-black'>{title}</span>
      </div>

      <div className='flex gap-x-2.5'>
        <div className={`w-1 bg-[#E7E7E7] rounded-xl`} />
        <span className='text-zinc-600' dir={`${isAddress ? 'rtl' : 'ltr'}`}>
          {desc}
        </span>
      </div>
    </div>
  );
}

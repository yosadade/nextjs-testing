import Image from 'next/image';
import { ICBack, ICPassingGrade } from '../../../../../public/assets';
import ILTeacher from '../../../../../public/assets/images/avatar.png';
import Card from '../../../../components/Card';

const Overview = () => {
  return (
    <Card
      className='w-full'
      breadcumb
    >
      <div
        className='flex flex-row align-middle'
        style={{
          alignItems: 'center'
        }}
      >
        <button
          className='cursor-pointer text-[14px] font-semibold text-[#0F1B40]'
          onClick={() => {}}
        >
          <Image
            alt='add'
            width={43}
            height={43}
            src={ICBack}
            className='mr-[20px]'
          />
        </button>
        <h1 className={`text-title text-semibold text-2xl`}>Matematika</h1>
      </div>
      <div className='flex flex-row justify-center items-center mt-5'>
        <div className='w-[35%] h-[150px] py-[33px] rounded-[10px] border-[1px] border-[#D0D0D0] justify-center items-center'>
          <div className='flex flex-row justify-center items-center'>
            <Image
              alt='grade'
              width={30}
              height={30}
              src={ICPassingGrade}
              className=''
            />
            <h1 className='ml-3 font-semibold text-[14px] text-[#808080] text-center'>
              PASSING GRADE
            </h1>
          </div>
          <h1 className='mt-2 font-semibold text-[36px] text-[#AF4A6D] text-center'>
            75
          </h1>
        </div>
        <div className='w-[20px]' />
        <div className='flex flex-row w-[65%] h-[150px] rounded-[10px] border-[1px] border-[#D0D0D0] justify-center items-center'>
          <div className='pr-12'>
            <h1 className='font-semibold text-[14px] text-[#808080] text-center'>
              PRACTICUM
            </h1>
            <h1 className='font-semibold text-4xl text-[#1695C9] mt-[10px]'>
              20%
            </h1>
          </div>

          <div className='border-x-[1px] border-[#D0D0D0] px-12 justify-center items-center'>
            <h1 className='font-semibold text-[14px] text-[#808080] text-center'>
              MID EXAM
            </h1>
            <h1 className='font-semibold text-4xl text-[#1695C9] mt-[10px] text-center'>
              30%
            </h1>
          </div>

          <div className='pl-12'>
            <h1 className='font-semibold text-[14px] text-[#808080] text-center'>
              FINAL EXAM
            </h1>
            <h1 className='font-semibold text-4xl text-[#1695C9] mt-[10px]'>
              50%
            </h1>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center mt-5'>
        <div className='w-[49%] h-[150px] rounded-[10px] border-[1px] border-[#D0D0D0] justify-center items-center py-5'>
          <h1 className='font-semibold text-[14px] text-[#808080] text-center'>
            MID EXAM
          </h1>
          <div className='flex flex-row items-center justify-center mt-5'>
            <Image
              alt='Teacher'
              src={ILTeacher}
              width={70}
              height={70}
            />
            <h1 className='font-semibold text-2xl text-[#3F3F3F] text-center ml-7'>
              Bazatulo Ndraha
            </h1>
          </div>
        </div>
        <div className='w-[2%]' />
        <div className='w-[49%] h-[150px] py-[53px] my-auto rounded-[10px] border-[1px] border-[#D0D0D0] justify-center items-center'>
          <h1 className='font-semibold text-4xl text-[#AF4A6D] text-center'>
            MANDATORY
          </h1>
        </div>
      </div>
      <div className='w-[100%] rounded-[10px] border-[1px] border-[#D0D0D0] justify-center items-center mt-5 py-5 px-10'>
        <h1 className='font-semibold text-[16px] text-[#808080]'>
          COURSE CHAPTER
        </h1>
        <li className='font-normal text-[16px] text-[#3F3F3F] mt-2'>
          Chapter 1 : Matematika Dasar
        </li>
        <li className='font-normal text-[16px] text-[#3F3F3F]'>
          Chapter 2 : Matematika Tidak Dasar
        </li>
        <li className='font-normal text-[16px] text-[#3F3F3F]'>
          Chapter 3 : Matematika Lumayan Atas
        </li>
        <li className='font-normal text-[16px] text-[#3F3F3F]'>
          Chapter 4 : Matematika Atas
        </li>
        <li className='font-normal text-[16px] text-[#3F3F3F]'>
          Chapter 5 : Matematika Lanjutan
        </li>
        <h1 className='font-semibold text-[16px] text-[#808080] mt-7'>
          LEARNING OUTCOME
        </h1>
        <p className='font-normal text-[16px] text-[#3F3F3F] mt-2'>
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit
        </p>
        <p className='font-normal text-[16px] text-[#3F3F3F] mt-2'>
          2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit
        </p>
        <p className='font-normal text-[16px] text-[#3F3F3F] mt-2'>
          3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit
        </p>
        <p className='font-normal text-[16px] text-[#3F3F3F] mt-2'>
          4. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit
        </p>
        <p className='font-normal text-[16px] text-[#3F3F3F] mt-2'>
          5. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit
        </p>
        <p className='font-normal text-[16px] text-[#3F3F3F] mt-2'>
          6. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit
        </p>
        <p className='font-normal text-[16px] text-[#3F3F3F] mt-2'>
          7. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit
        </p>
      </div>
    </Card>
  );
};

export default Overview;

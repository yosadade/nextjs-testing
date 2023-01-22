import Image from 'next/image';
import Card from '../../../../components/Card';
import Calendar from '../../../../components/templates/RightBar/Calendar';
import { ICBackMini, ICForward } from '../../../../../public/assets';
import { useState } from 'react';
import AcademicCalendarDay from '../components/AcademicCalendarDay_view';

const AcademicCalendarView = () => {
  const [active, setActive] = useState('Day');

  const DATA = [
    {
      title: 'Month'
    },
    {
      title: 'Week'
    },
    {
      title: 'Day'
    }
  ];
  return (
    <Card
      breadcumb
      headerTitle='Class Schedule'
      className='w-full h-full'
    >
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center'>
          <button className='w-[24px] h-[24px]'>
            <Image
              alt='back'
              src={ICBackMini}
            />
          </button>
          <button className='w-[24px] h-[24px] ml-1'>
            <Image
              alt='back'
              src={ICForward}
            />
          </button>
          <h1 className='text-semibold text-2xl text-[#3F3F3F] ml-12'>
            Monday, 1st October 2022
          </h1>
        </div>
        <div className='flex flex-row items-center'>
          {DATA.map((item) => {
            return (
              <button
                key={item.title}
                onClick={() => setActive(item.title)}
                className={`${
                  item.title === active ? 'bg-[#1695C9]' : 'bg-[#FFFFFF]'
                } px-5 py-[5px] rounded-[10px]`}
              >
                <h1
                  className={`${
                    item.title === active
                      ? 'text-[#FFFFFF] font-semibold'
                      : 'text-[#3F3F3F] font-normal '
                  } text-[14px] `}
                >
                  {item.title}
                </h1>
              </button>
            );
          })}
        </div>
      </div>
      <div className='mt-7'>
        {active === 'Month' ? (
          <div>Month</div>
        ) : active === 'Week' ? (
          <div>Week</div>
        ) : (
          <AcademicCalendarDay />
        )}
      </div>
      {/* <Calendar /> */}
    </Card>
  );
};

export { AcademicCalendarView };

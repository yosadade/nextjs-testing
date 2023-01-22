import { Assignment } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import Card from '../../../../components/Card';
import CardGraduation from './components/CardGraduation';
import ILGraduation from '../../../../../public/assets/images/graduation.png';
import ILAchievement from '../../../../../public/assets/images/badge.png';
import CardAchievement from './components/CardAchievement';

const DATA = [
  {
    id: 1,
    title: 'Personal Information'
  },
  {
    id: 2,
    title: 'My Scholarship'
  },
  {
    id: 3,
    title: 'My Achievement'
  }
];

const CITIZENSHIPINFORMATION = [
  {
    id: 1,
    title: 'Citizenship',
    value: 'Indonesia Citizenship'
  },
  {
    id: 2,
    title: 'Citizenship Identification Type',
    value: 'KTP'
  },
  {
    id: 3,
    title: 'Citizenship Identification Number',
    value: '01234567890'
  }
];

const PERSONALINFORMATION = [
  {
    id: 1,
    title: 'Student ID',
    value: '2005-STE-0250'
  },
  {
    id: 2,
    title: 'Student Name',
    value: 'Angus Young'
  },
  {
    id: 3,
    title: 'Student Gender',
    value: 'Male'
  },
  {
    id: 3,
    title: 'Student Date of Birth',
    value: '01-01-2005'
  },
  {
    id: 4,
    title: 'Student Place of Birth',
    value: 'Ngawi'
  },
  {
    id: 5,
    title: 'Student Religion',
    value: 'Kristen'
  },
  {
    id: 6,
    title: 'Student Phone Number',
    value: '081234567890'
  },
  {
    id: 7,
    title: 'Student Email',
    value: 'angusyoung@studentmail.com'
  },
  {
    id: 8,
    title: 'Student Address',
    value: 'Jln. in aja dulu ya kan'
  }
];

const EDUCATIONINFORMATION = [
  {
    id: 1,
    title: 'Data Enrolled',
    value: '2005-STE-0250'
  },
  {
    id: 2,
    title: 'School',
    value: 'SMAK 1'
  },
  {
    id: 3,
    title: 'Student Education Level',
    value: 'High School'
  },
  {
    id: 4,
    title: 'Student Education Grade Level',
    value: 'SMA 2'
  },
  {
    id: 5,
    title: 'Student Type',
    value: 'Scholarship Student'
  },
  {
    id: 6,
    title: 'Student Graduation Date',
    value: '22-07-2022'
  }
];

const MOTHERINFORMATION = [
  {
    id: 1,
    title: `Mother's Citizenship`,
    value: 'Foreign Citizenship'
  },
  {
    id: 2,
    title: `Mother's Citizenship Identification Type`,
    value: 'Temporary Residence Card'
  },
  {
    id: 3,
    title: `Mother's Citizenship Identification Number`,
    value: '123-456-789'
  },
  {
    id: 4,
    title: `Mother's Name`,
    value: 'Kim Kardashian'
  },
  {
    id: 5,
    title: `Mother's Phone Number`,
    value: '081234567890'
  },
  {
    id: 6,
    title: `Mother's Email`,
    value: 'mother@mail.com'
  }
];

const FATHERINFORMATION = [
  {
    id: 1,
    title: `Father's Citizenship`,
    value: 'Foreign Citizenship'
  },
  {
    id: 2,
    title: `Father's Citizenship Identification Type`,
    value: 'Temporary Residence Card'
  },
  {
    id: 3,
    title: `Father's Citizenship Identification Number`,
    value: '123-456-789'
  },
  {
    id: 4,
    title: `Father's Name`,
    value: 'Budi Young'
  },
  {
    id: 5,
    title: `Father's Phone Number`,
    value: '081234567890'
  },
  {
    id: 6,
    title: `Father's Email`,
    value: 'father@mail.com'
  }
];

const MyProfileView = () => {
  const [activeTabbar, setActiveTabbar] = useState(1);
  return (
    <Card breadcumb>
      <div className='header flex justify-center items-center'>
        <div className='profile flex flex-col items-center mt-8'>
          <Avatar
            src='/assets/images/avatar.png'
            alt='avatar'
            sx={{
              width: '166px',
              height: '166px'
            }}
          />
          <h3 className='text-[#0F1B40] text-[32px] mt-4 leading-7 font-semibold text-semibold mb-2'>
            Angus Young
          </h3>
          <span className='text-subtitle text-sm leading-5 font-normal'>
            2005-STE-0250
          </span>
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#D0D0D0] mt-8' />
      <div
        className={`${
          activeTabbar === 2
            ? 'ml-[18%]'
            : activeTabbar === 3
            ? 'ml-[32%]'
            : 'ml-0'
        }  w-[13%] h-[1.5px] bg-[#1695C9]`}
      />
      <div className='flex flex-row mt-5 '>
        {DATA.map((item, idx) => {
          return (
            <button
              onClick={() => setActiveTabbar(idx + 1)}
              key={idx}
              className={`${
                item.id === activeTabbar ? 'text-[#1695C9]' : 'text-[#808080]'
              } text-sm leading-7 font-semibold mr-5`}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div className='mt-5'>
        {activeTabbar === 1 && (
          <>
            <div className='mt-12'>
              <h3 className='text-[#808080] text-sm font-semibold'>
                Personal Information
              </h3>
              {CITIZENSHIPINFORMATION.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className='flex flex-row align-middle mt-5'
                  >
                    <div className='w-[265px] '>
                      <p className='text-[#808080] text-[16px] font-[400]'>
                        {item.title}
                      </p>
                    </div>

                    <h3 className='text-[#3F3F3F] text-[16px] font-medium ml-[104px]'>
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className='mt-12'>
              <h3 className='text-[#808080] text-sm font-semibold'>
                PERSONAL INFORMATION
              </h3>
              {PERSONALINFORMATION.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className='flex flex-row align-middle mt-5'
                  >
                    <div className='w-[265px] '>
                      <p className='text-[#808080] text-[16px] font-[400]'>
                        {item.title}
                      </p>
                    </div>

                    <h3 className='text-[#3F3F3F] text-[16px] font-medium ml-[104px]'>
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className='mt-12'>
              <h3 className='text-[#808080] text-sm font-semibold'>
                EDUCATION INFORMATION
              </h3>
              {EDUCATIONINFORMATION.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className='flex flex-row align-middle mt-5'
                  >
                    <div className='w-[265px] '>
                      <p className='text-[#808080] text-[16px] font-[400]'>
                        {item.title}
                      </p>
                    </div>

                    <h3 className='text-[#3F3F3F] text-[16px] font-medium ml-[104px]'>
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className='mt-12'>
              <h3 className='text-[#808080] text-sm font-semibold'>
                MOTHER INFORMATION
              </h3>
              {MOTHERINFORMATION.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className='flex flex-row align-middle mt-5'
                  >
                    <div className='w-[265px] '>
                      <p className='text-[#808080] text-[16px] font-[400]'>
                        {item.title}
                      </p>
                    </div>

                    <h3 className='text-[#3F3F3F] text-[16px] font-medium ml-[104px]'>
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className='mt-12'>
              <h3 className='text-[#808080] text-sm font-semibold'>
                FATHER INFORMATON
              </h3>
              {FATHERINFORMATION.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className='flex flex-row align-middle mt-5'
                  >
                    <div className='w-[265px] '>
                      <p className='text-[#808080] text-[16px] font-[400]'>
                        {item.title}
                      </p>
                    </div>

                    <h3 className='text-[#3F3F3F] text-[16px] font-medium ml-[104px]'>
                      {item.value}
                    </h3>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {activeTabbar === 2 && (
          <>
            <CardGraduation
              title='SCHOLARSHIP AWARDEE CIMB NIAGA 2020-2022'
              author='CIMB NIAGA External'
              time='15 October 2020 - 15 October 2022 Partial'
              image={ILGraduation}
            />
            <CardGraduation
              title='SCHOLARSHIP AWARDEE CIMB NIAGA 2020-2022'
              author='CIMB NIAGA External'
              time='15 October 2020 - 15 October 2022 Partial'
              image={ILGraduation}
            />

            <CardGraduation
              title='SCHOLARSHIP AWARDEE CIMB NIAGA 2020-2022'
              author='CIMB NIAGA External'
              time='15 October 2020 - 15 October 2022 Partial'
              image={ILGraduation}
            />
            <CardGraduation
              title='SCHOLARSHIP AWARDEE CIMB NIAGA 2020-2022'
              author='CIMB NIAGA External'
              time='15 October 2020 - 15 October 2022 Partial'
              image={ILGraduation}
            />
            <CardGraduation
              title='SCHOLARSHIP AWARDEE CIMB NIAGA 2020-2022'
              author='CIMB NIAGA External'
              time='15 October 2020 - 15 October 2022 Partial'
              image={ILGraduation}
            />
          </>
        )}
        {activeTabbar === 3 && (
          <>
            <CardAchievement
              title='Gold Medal OSN Matematika'
              author='Kemendikbud'
              time='01-01-2010'
              achivement='Pemenang medali emas OSN Matematika'
              image={ILAchievement}
            />
            <CardAchievement
              title='Gold Medal OSN Fisika'
              author='Kemendikbud'
              time='01-01-2010'
              achivement='Pemenang medali emas OSN Matematika'
              image={ILAchievement}
            />
          </>
        )}
      </div>
    </Card>
  );
};

export { MyProfileView };

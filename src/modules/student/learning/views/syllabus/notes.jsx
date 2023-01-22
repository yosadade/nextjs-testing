import {
  FormControl,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TextField
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { CalendarToday, ChevronLeft, ChevronRight } from '@mui/icons-material';
import Image from 'next/image';
import { useState } from 'react';
import {
  ICBack,
  ICCheck,
  ICCloudDownload,
  ICFile,
  ICFileExcel,
  ICFile_active,
  ICTrash,
  ICUpload
} from '../../../../../../public/assets';
import Card from '../../../../../components/Card';
import CardNotes from '../../components/CardNotes';

const DATA_NOTES = [
  {
    id: 1,
    title: 'Catatan Harian 8',
    date: '17 November 2022',
    value:
      'Lorem ipsum dolor sit amet consectetur. Gravida senectus amet convallis pulvinar aenean semper leo ut turpis. Tincidunt mi aenean vitae.....'
  },
  {
    id: 2,
    title: 'Catatan Harian 7',
    date: '10 November 2022',
    value:
      'Lorem ipsum dolor sit amet consectetur. Gravida senectus amet convallis pulvinar aenean semper leo ut turpis. Tincidunt mi aenean vitae.....'
  },
  {
    id: 3,
    title: 'Catatan Harian 6',
    date: '3 November 2022',
    value:
      'Lorem ipsum dolor sit amet consectetur. Gravida senectus amet convallis pulvinar aenean semper leo ut turpis. Tincidunt mi aenean vitae.....'
  },
  {
    id: 4,
    title: 'Catatan Harian 5',
    date: '27 Oktober 2022',
    value:
      'Lorem ipsum dolor sit amet consectetur. Gravida senectus amet convallis pulvinar aenean semper leo ut turpis. Tincidunt mi aenean vitae.....'
  },
  {
    id: 5,
    title: 'Catatan Harian 4',
    date: '20 Oktober 2022',
    value:
      'Lorem ipsum dolor sit amet consectetur. Gravida senectus amet convallis pulvinar aenean semper leo ut turpis. Tincidunt mi aenean vitae.....'
  },
  {
    id: 6,
    title: 'Catatan Harian 3',
    date: '20 Oktober 2022',
    value:
      'Lorem ipsum dolor sit amet consectetur. Gravida senectus amet convallis pulvinar aenean semper leo ut turpis. Tincidunt mi aenean vitae.....'
  },
  {
    id: 7,
    title: 'Catatan Harian 2',
    date: '20 Oktober 2022',
    value:
      'Lorem ipsum dolor sit amet consectetur. Gravida senectus amet convallis pulvinar aenean semper leo ut turpis. Tincidunt mi aenean vitae.....'
  },
  {
    id: 8,
    title: 'Catatan Harian 1',
    date: '20 Oktober 2022',
    value:
      'Lorem ipsum dolor sit amet consectetur. Gravida senectus amet convallis pulvinar aenean semper leo ut turpis. Tincidunt mi aenean vitae.....'
  }
];

const Notes = () => {
  const [isDetail, setIsDetail] = useState(false);

  return (
    <Card
      className='w-full h-full'
      breadcumb
    >
      {!isDetail ? (
        <>
          <div
            className='flex flex-row items-start'
            // style={{
            //   alignItems: 'center'
            // }}
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
            <div>
              <h1 className={`text-title text-semibold text-2xl`}>Notes</h1>
              <p className={`font-normal text-lg text-[#3F3F3F]`}>
                Matematika; Chapter 1:Integral 1
              </p>
            </div>
          </div>
          <div className='mt-8'>
            <TextField
              placeholder='Search Here'
              size='small'
              fullWidth
            />
          </div>
          <div className='mt-8'>
            <div className='flex gap-5 flex-wrap justify-between'>
              {DATA_NOTES.map((item, idx) => {
                return (
                  <CardNotes
                    key={idx}
                    title={item.title}
                    date={item.date}
                    value={item.value}
                    onClick={() => setIsDetail(true)}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-row items-start'>
            <button
              className='cursor-pointer text-[14px] font-semibold text-[#0F1B40]'
              onClick={() => setIsDetail(false)}
            >
              <Image
                alt='add'
                width={43}
                height={43}
                src={ICBack}
                className='mr-[20px]'
              />
            </button>
            <div>
              <h1 className={`text-title text-semibold text-2xl`}>
                Catatan harian 8
              </h1>
              <p className={`font-normal text-lg text-[#3F3F3F]`}>
                Matematika; Chapter 1:Integral 1
              </p>
            </div>
          </div>
          <p className={`font-normal text-base text-[#808080] mt-8`}>NOTE</p>
          <p className={`font-normal text-base text-[#3F3F3F] mt-5`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            potenti rutrum sed nec fermentum odio. Nibh ac volutpat condimentum
            sem ultrices. Felis suscipit cras purus vel tristique tellus morbi
            sit congue. Arcu eu quis pellentesque nisi. Nunc tortor eleifend
            morbi faucibus gravida tellus massa sagittis cras. Posuere vel id
            volutpat neque facilisis lacus pretium vitae rhoncus. Enim purus sit
            libero, pellentesque tempus vitae nisl augue nisi. Sagittis
            fringilla eget etiam lectus non fames. Rhoncus, maecenas nam at
            maecenas in.
          </p>
          <p className={`font-normal text-base text-[#808080] mt-12`}>
            ATTACHMENT
          </p>
          <button className='flex flex-row justify-center items-center p-[10px] mt-5 rounded-[10px] text-base font-semibold bg-[#FFFFFF] border-[1px] border-[#1695C9]'>
            <Image
              alt='File Excel'
              width={30}
              height={30}
              src={ICFileExcel}
              className='mr-[10px]'
            />
            <p className={`text-semibold text-sm text-[#0F1B40]`}>
              Grafik Integral.xls
            </p>
          </button>
        </>
      )}
    </Card>
  );
};

export default Notes;

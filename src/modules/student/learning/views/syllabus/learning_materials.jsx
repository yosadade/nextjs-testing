import {
  FormControl,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TextField
} from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Image from 'next/image';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { ICBack, ICFileExcel, ICPDF } from '../../../../../../public/assets';
import Card from '../../../../../components/Card';

const DATA_LEARNINGMATERIALS = [
  {
    id: 1,

    value: 'Sub Chapter 1: Integral tingkat awal'
  },
  {
    id: 2,
    value: 'Sub Chapter 1: Integral tingkat menengah'
  },
  {
    id: 3,

    value: 'Sub Chapter 1: Integral tingkat akhir'
  }
];

const LearningMaterials = () => {
  const [show, setShow] = useState(10);
  const [isSubChapter, setIsSubChapter] = useState();

  const handleUploadAnswer = () => {
    console.log('upload avatar');
    setIsVisible({
      ...isVisible,
      btnUpload: !isVisible.btnUpload
    });
  };

  return (
    <Card
      className='w-full h-full'
      breadcumb
    >
      {!isSubChapter ? (
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
              <h1 className={`text-title text-semibold text-2xl`}>
                Learning Materials
              </h1>
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
          <div className='header-table flex justify-between items-center flex-wrap mt-7'>
            <div className='flex justify-start items-center gap-2'>
              <span className='text-sm text-secondary'>Showing</span>
              <FormControl size='small'>
                <Select
                  className='rounded-full text-sm py-0 px-1'
                  value={show}
                  onChange={(item) => {
                    setShow(item.target.value);
                  }}
                >
                  <MenuItem
                    value={10}
                    className='text-sm'
                  >
                    10
                  </MenuItem>
                  <MenuItem
                    value={20}
                    className='text-sm'
                  >
                    20
                  </MenuItem>
                  <MenuItem
                    value={50}
                    className='text-sm'
                  >
                    50
                  </MenuItem>
                  <MenuItem
                    value={100}
                    className='text-sm'
                  >
                    100
                  </MenuItem>
                </Select>
              </FormControl>
              <span className='text-sm text-secondary'>Items per page</span>
            </div>
          </div>
          <div className='mt-8'>
            <div className='table-responsive'>
              <table className='w-full'>
                <thead>
                  <tr className='bg-turquoise text-white justify-between'>
                    <th className='text-base text-semibold py-3 text-left pl-5 w-full'>
                      Sub Chapter
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className='pl-5 py-3 text-sm text-title cursor-pointer'
                      style={{
                        color: '#04A9F5'
                      }}
                      onClick={() => setIsSubChapter(true)}
                    >
                      Sub Chapter 1: Integral tingkat awal
                    </td>
                  </tr>
                  <tr>
                    <td
                      className='pl-5 py-3 text-sm text-title bg-lightBlue cursor-pointer'
                      style={{
                        color: '#04A9F5'
                      }}
                      onClick={() => setIsSubChapter(true)}
                    >
                      Sub Chapter 2: Integral tingkat menengah
                    </td>
                  </tr>
                  <tr>
                    <td
                      className='pl-5 py-3 text-sm text-title cursor-pointer'
                      style={{
                        color: '#04A9F5'
                      }}
                      onClick={() => setIsSubChapter(true)}
                    >
                      Sub Chapter 3: Integral tingkat akhir
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='pagination flex items-center justify-end gap-2 mt-5'>
            <IconButton
              size='small'
              color='primary'
              className='cursor-pointer'
            >
              <ChevronLeft />
            </IconButton>
            <div className='page-number'>
              <span className='text-lg text-secondary'>1</span>
            </div>
            <IconButton
              size='small'
              color='primary'
              className='cursor-pointer'
            >
              <ChevronRight />
            </IconButton>
          </div>
        </>
      ) : (
        <>
          <div
            className='flex flex-row items-start'
            // style={{
            //   alignItems: 'center'
            // }}
          >
            <button
              className='cursor-pointer text-[14px] font-semibold text-[#0F1B40]'
              onClick={() => setIsSubChapter(false)}
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
                Sub Chapter 1: Integral tingkat awal
              </h1>
              <p className={`font-normal text-lg text-[#3F3F3F]`}>
                Matematika; Chapter 1:Integral 1
              </p>
            </div>
          </div>
          <div className='mt-10 h-[300px] w-full bg-[#808080]'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=kTSxJ9PSJ00'
              width='100%'
              height='100%'
            />
          </div>
          <div className='mt-12'>
            <h1 className={`text-base font-semibold text-[#808080]`}>
              Material
            </h1>
            <p className={`text-base font-normal text-[#3F3F3F] mt-3`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              fringilla quam amet senectus aliquet. In varius eu arcu eget nunc.
              Et mi sagittis pharetra turpis orci in id quis mattis. Sit mattis
              nisl donec elit, pharetra facilisi faucibus porttitor. Sit mi nec
              volutpat auctor tellus lobortis tincidunt quis. Maecenas nunc
              dictum cursus lectus est dictumst a. Aenean diam ut magna augue
              pulvinar. Sit tellus diam eget dui euismod quam. Lectus eleifend
              etiam vel eget ultricies volutpat.
            </p>
          </div>
          <div className='mt-12'>
            <h1 className={`text-base font-semibold text-[#808080]`}>
              Attachment
            </h1>
            <div className='flex flex-row'>
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
              <button className='flex flex-row justify-center items-center p-[10px] mt-5 rounded-[10px] text-base font-semibold bg-[#FFFFFF] border-[1px] border-[#1695C9] ml-5'>
                <Image
                  alt='File Excel'
                  width={30}
                  height={30}
                  src={ICPDF}
                  className='mr-[10px]'
                />
                <p className={`text-semibold text-sm text-[#0F1B40]`}>
                  Bahan PDF.pdf
                </p>
              </button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default LearningMaterials;

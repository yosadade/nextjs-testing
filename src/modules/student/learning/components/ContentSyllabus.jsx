import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { ICBack } from '../../../../../public/assets';
import Card from '../../../../components/Card';

const ContentSyllabus = ({ onBack, onNext }) => {
  const [show, setShow] = useState(10);

  return (
    <Card
      className='w-full h-full'
      breadcumb
    >
      <div
        className='flex flex-row items-start'
        // style={{
        //   alignItems: 'center'
        // }}
      >
        <button
          className='cursor-pointer text-[14px] font-semibold text-[#0F1B40]'
          onClick={onBack}
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
          <h1 className={`text-title text-semibold text-2xl`}>Syllabus</h1>
          <p className={`font-normal text-lg text-[#3F3F3F]`}>Matematika</p>
        </div>
      </div>
      <div className='mt-7'>
        <TextField
          placeholder='Search Here'
          size='small'
          fullWidth
        />
      </div>
      <div className='flex justify-start items-center gap-2 mt-7'>
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
      <div className='mt-8'>
        <div className='table-responsive'>
          <table className='w-full'>
            <thead>
              <tr className='bg-turquoise text-white justify-between w-full'>
                <th className='text-base text-semibold py-3 text-left pl-5 w-full'>
                  Course Chapter
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className='pl-5 py-3 text-sm text-title '
                  style={{
                    color: '#04A9F5'
                  }}
                >
                  <p
                    className='cursor-pointer'
                    onClick={onNext}
                  >
                    Chapter 1: Integral 1
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  className='pl-5 py-3 text-sm text-title bg-lightBlue'
                  style={{
                    color: '#04A9F5'
                  }}
                >
                  {' '}
                  <p
                    className='cursor-pointer'
                    onClick={onNext}
                  >
                    Chapter 2: Integral 2
                  </p>
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
    </Card>
  );
};

export default ContentSyllabus;

ContentSyllabus.propTypes = {
  onBack: PropTypes.func,
  onNext: PropTypes.func
};

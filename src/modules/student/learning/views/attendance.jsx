import { CalendarToday, ChevronLeft, ChevronRight } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import { Stack } from '@mui/system';
import {
  DatePicker,
  DesktopDatePicker,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Image from 'next/image';
import { useState } from 'react';
import { ICBack } from '../../../../../public/assets';
import Card from '../../../../components/Card';
import DataTable from '../components/DataTable';

const Attendance = () => {
  const [show, setShow] = useState(10);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);

  const createData = (
    classSchedule,
    classSession,
    course,
    clockInTime,
    attendanceStatus,
    remark
  ) => {
    return {
      classSchedule,
      classSession,
      course,
      clockInTime,
      attendanceStatus,
      remark
    };
  };
  const rowHeader = [
    {
      id: 'class_schedule',
      label: 'Class Schedule'
    },
    {
      id: 'class_session',
      label: 'Class Session'
    },
    {
      id: 'course',
      label: 'Course'
    },
    {
      id: 'clock_in_time',
      label: 'Clock In Time'
    },
    {
      id: 'attendance_status',
      label: 'Attendance Status'
    },
    {
      id: 'remark',
      label: 'Remark'
    }
  ];

  const dataBody = [
    createData(
      '09.00-10.00',
      '18 Desember 2022',
      'Bahasa Indonesia',
      '09.00',
      'Present',
      '-'
    ),
    createData(
      '10.00-11.00',
      '18 Desember 2022',
      'Matematika',
      '09.00',
      'Present',
      '-'
    ),
    createData(
      '11.00-12.00',
      '18 Desember 2022',
      'Sains',
      '09.00',
      'Present',
      '-'
    ),
    createData(
      '13.00-14.00',
      '18 Desember 2022',
      'Bahasa Inggris',
      '09.00',
      'Present',
      '-'
    ),
    createData(
      '14.00-15.00',
      '18 Desember 2022',
      'Kimia',
      '09.00',
      'Present',
      '-'
    ),
    createData(
      '15.00-16.00',
      '18 Desember 2022',
      'IPS',
      '09.00',
      'Present',
      '-'
    )
  ];
  return (
    <Card
      breadcumb
      className=' w-full h-full'
    >
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
            Learning Material
          </h1>
          <p className={`font-normal text-lg text-[#3F3F3F]`}>
            Matematika: Chapter 1: Integral 1
          </p>
        </div>
      </div>
      <div className='header-table flex justify-between items-center flex-wrap my-5'>
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
                <th className='text-base text-semibold py-3 text-left pl-5 w-1/5'>
                  Class Schedule
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5 w-1/5'>
                  Class Session
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5 w-1/5'>
                  Clock In Time
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5 w-1/5'>
                  Attendance Status
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5 w-1/5'>
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pl-5 py-3 text-sm text-title'>09.00-10.00</td>
                <td className='pl-5 py-3 text-sm text-title'>
                  3 November 2022
                </td>
                <td className='pl-5 py-3 text-sm text-title'>09.00</td>
                <td className='pl-5 py-3 text-sm text-title'>Present</td>
                <td className='pl-5 py-3 text-sm text-title'>-</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  14.00-15.00
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  2 November 2022
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  14.00
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Present
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>-</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title'>13.00-14.00</td>
                <td className='pl-5 py-3 text-sm text-title'>
                  2 November 2022
                </td>
                <td className='pl-5 py-3 text-sm text-title'>13.00</td>
                <td className='pl-5 py-3 text-sm text-title'>Present</td>
                <td className='pl-5 py-3 text-sm text-title'>-</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  12.00-13.00
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  2 November 2022
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  12.00
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Present
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>-</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title'>12.00-13.00</td>
                <td className='pl-5 py-3 text-sm text-title'>
                  2 November 2022
                </td>
                <td className='pl-5 py-3 text-sm text-title'>11.00</td>
                <td className='pl-5 py-3 text-sm text-title'>Present</td>
                <td className='pl-5 py-3 text-sm text-title'>-</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  10.00-11.00
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  2 November 2022
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  10.00
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Present
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>-</td>
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

export default Attendance;

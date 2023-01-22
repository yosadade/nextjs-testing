import { CalendarToday } from '@mui/icons-material';
import { FormControl, MenuItem, Select, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import {
  DatePicker,
  DesktopDatePicker,
  LocalizationProvider
} from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useState } from 'react';
import Card from '../../../../components/Card';
import DataTable from '../components/DataTable';

const AttendView = () => {
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
      headerTitle='Attendance'
    >
      <div className='header-table flex justify-between items-center flex-wrap mb-5'>
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
        <div className='flex justify-between items-center flex-wrap gap-10'>
          <FormControl size='small'>
            <Select
              displayEmpty
              className='rounded-full text-sm py-1 px-1'
              value={selectedCourse}
              onChange={(item) => {
                setSelectedCourse(item.target.value);
              }}
              renderValue={(selected) => {
                return selected === '' ? 'Select Course' : selected;
              }}
            >
              <MenuItem
                disabled
                value=''
              >
                <em>Selected Course</em>
              </MenuItem>
              <MenuItem
                value=''
                className='text-sm'
              >
                10
              </MenuItem>
            </Select>
          </FormControl>
          <div className='date-picker'>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <div className='flex gap-2.5'>
                <DatePicker
                  inputFormat='DD/MM/YYYY'
                  label='From'
                  className='w-40'
                  components={{
                    OpenPickerIcon: CalendarToday
                  }}
                  value={dateFrom}
                  onChange={(value) => {
                    setDateFrom(value);
                  }}
                  renderInput={(props) => (
                    <TextField
                      size='small'
                      className='p-1'
                      sx={{
                        '& fieldset': {
                          paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '30px'
                        }
                      }}
                      {...props}
                    />
                  )}
                />
                <DatePicker
                  inputFormat='DD/MM/YYYY'
                  label='To'
                  className='w-40'
                  components={{
                    OpenPickerIcon: CalendarToday
                  }}
                  value={dateTo}
                  onChange={(value) => {
                    setDateTo(value);
                  }}
                  renderInput={(props) => (
                    <TextField
                      size='small'
                      className='p-1'
                      fullWidth
                      sx={{
                        '& fieldset': {
                          paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '30px'
                        }
                      }}
                      {...props}
                    />
                  )}
                />
              </div>
            </LocalizationProvider>
          </div>
        </div>
      </div>
      <DataTable
        dataHeader={rowHeader}
        dataBody={dataBody}
        pagination
      />
    </Card>
  );
};

export { AttendView };

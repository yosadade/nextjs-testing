import { CalendarToday } from '@mui/icons-material';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import Image from 'next/image';
import { useState } from 'react';
import { ICAdd, ICBack } from '../../../../../public/assets/icons';
import Card from '../../../../components/Card';
import DataTable from './components/DataTable';

const DataChangeView = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [selected, setSelected] = useState(false);
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [show, setShow] = useState(10);

  const [isVisible, setIsVisible] = useState({
    mother: true,
    father: true,
    guardian: false
  });

  const handleShow = () => {
    setShowDetail(!showDetail);
  };

  const handleChangeCheckBox = (value) => {
    if (value === 'mother') {
      setIsVisible({
        ...isVisible,
        mother: !isVisible.mother
      });
    }
    if (value === 'father') {
      setIsVisible({
        ...isVisible,
        father: !isVisible.father
      });
    }
    if (value === 'guardian') {
      setIsVisible({
        ...isVisible,
        guardian: !isVisible.guardian
      });
    }
  };

  return (
    <Card
      className={`w-full ${!showDetail && 'h-full'}`}
      breadcumb
    >
      {!showDetail ? (
        <>
          <div className='flex justify-between items-center'>
            <h1 className={`text-title text-semibold text-2xl`}>
              Data Change History
            </h1>
            <Button
              size='small'
              variant='outlined'
              sx={{}}
              className='py-2 px-3 rounded-xl border-[#1695C9] cursor-pointer'
              onClick={handleShow}
            >
              <Image
                alt='add'
                src={ICAdd}
                className='mr-[20px]'
              />
              <h1 className='text-[14px] font-semibold text-[#0F1B40]'>
                New Data Change Request
              </h1>
            </Button>
          </div>
          <div className='header-table flex justify-between items-center flex-wrap mt-7'>
            <div className='flex justify-start items-center gap-2'>
              <span className='text-sm text-secondary'>Showing</span>
              <FormControl
                size='small'
                sx={{
                  borderColor: 'red',
                  marginTop: '10px'
                }}
              >
                <Select
                  className='rounded-full text-sm py-0'
                  sx={{
                    color: '#1695C9'
                  }}
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
                    <th className='text-base text-semibold py-3 text-left pl-5 w-1/3'>
                      Data Change Form Number
                    </th>
                    <th className='text-base text-semibold py-3 text-left pl-5 w-1/3'>
                      Data Submitted
                    </th>
                    <th className='text-base text-semibold py-3 text-left pl-5 w-1/3'>
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className='pl-5 py-3 text-sm text-title'
                      style={{
                        color: '#04A9F5'
                      }}
                    >
                      20050250-11012022-0003
                    </td>
                    <td className='pl-5 py-3 text-sm text-title'>
                      1 October 2022; 08.00-09.00
                    </td>
                    <td
                      className='pl-5 py-3 text-sm text-title'
                      style={{
                        color: '#EB6200'
                      }}
                    >
                      ON REVIEW
                    </td>
                  </tr>
                  <tr>
                    <td
                      className='pl-5 py-3 text-sm text-title bg-lightBlue'
                      style={{
                        color: '#04A9F5'
                      }}
                    >
                      20050250-11012022-0003
                    </td>
                    <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                      1 October 2022; 08.00-09.00
                    </td>
                    <td
                      className='pl-5 py-3 text-sm text-title bg-lightBlue'
                      style={{
                        color: '#2AD000'
                      }}
                    >
                      APPROVED
                    </td>
                  </tr>
                  <tr>
                    <td
                      className='pl-5 py-3 text-sm text-title'
                      style={{
                        color: '#04A9F5'
                      }}
                    >
                      20050250-11012022-0003
                    </td>
                    <td className='pl-5 py-3 text-sm text-title'>
                      1 October 2022; 08.00-09.00
                    </td>
                    <td
                      className='pl-5 py-3 text-sm text-title'
                      style={{
                        color: '#DA1E28'
                      }}
                    >
                      REJECTED
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
        <div>
          <div className='flex justify-between items-center'>
            <div
              className='flex flex-row align-middle justify-center'
              style={{
                alignItems: 'center'
              }}
            >
              <button
                className='cursor-pointer text-[14px] font-semibold text-[#0F1B40]'
                onClick={handleShow}
              >
                <Image
                  alt='add'
                  width={43}
                  height={43}
                  src={ICBack}
                  className='mr-[20px]'
                />
              </button>
              <h1 className={`text-title text-semibold text-2xl`}>
                Data Change Form
              </h1>
            </div>

            <button
              className='py-[10px] px-12 rounded-[20px] bg-[#1695C9] cursor-pointer text-[18px] font-semibold text-[#FFFFFF]'
              onClick={handleShow}
            >
              SUBMIT
            </button>
          </div>
          <div className='my-8'>
            <h3 className='font-semibold text-[16px] text-[#808080]'>
              Form Number
            </h3>
            <TextField
              disabled
              placeholder='1234567890'
              className='w-full bg-[#D0D0D0] border-0 border-[#ffffff] rounded-[10px]'
              size='small'
              sx={{
                '& fieldset': {
                  // paddingLeft: (theme) => theme.spacing(2.5),
                  borderRadius: '10px',
                  borderWidth: '0px'
                }
              }}
              style={{
                marginTop: '10px',
                fontSize: '16px'
              }}
            />
            <div className='mt-8'>
              <h3 className='font-semibold text-[16px] text-[#B8B8B8]'>
                Citizenship Information
              </h3>
              <div className='mt-5'>
                <h1 className='font-semibold text-[16px] text-[#808080] '>
                  Citizenship
                </h1>
                <FormControl row>
                  <RadioGroup
                    row
                    aria-labelledby='demo-radio-buttons-group-label'
                    defaultValue='female'
                    name='radio-buttons-group'
                  >
                    <FormControlLabel
                      value='indonesian citizenship'
                      className='text-[#6B6B6B] font-[400] text-[16px]'
                      control={
                        <Radio
                          sx={{
                            color: '#BCBCBC',
                            '&.Mui-checked': {
                              color: '#BCBCBC'
                            }
                          }}
                        />
                      }
                      label='Indonesian Citizenship'
                    />
                    <FormControlLabel
                      value='foreign citizenship'
                      className='text-[#6B6B6B] font-[400] text-[16px]'
                      control={
                        <Radio
                          sx={{
                            color: '#BCBCBC',
                            '&.Mui-checked': {
                              color: '#BCBCBC'
                            }
                          }}
                        />
                      }
                      label='Foreign Citizenship'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className='mt-5'>
                <h1 className='font-semibold text-[16px] text-[#808080] '>
                  Citizenship Identification Type
                </h1>
                <FormControl
                  fullWidth
                  sx={{
                    '& fieldset': {
                      // paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: '10px'
                    },
                    marginTop: '10px'
                  }}
                >
                  <Select
                    className='rounded-[10px] h-10 text-sm py-0 text-[#3F3F3F] font-normal] border-[#D0D0D0]'
                    defaultValue={1}
                    value={1}
                    onChange={(item) => {
                      console.log(item.target.value);
                    }}
                  >
                    <MenuItem
                      value={1}
                      className='text-sm'
                    >
                      KTP
                    </MenuItem>
                    <MenuItem
                      value={2}
                      className='text-sm'
                    >
                      KTP
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='mt-5'>
                <h1 className='font-semibold text-[16px] text-[#808080] '>
                  Citizenship Identification Number
                </h1>
                <TextField
                  fullWidth
                  id='outlined-required'
                  placeholder=''
                  type='number'
                  sx={{
                    '& fieldset': {
                      // paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: '10px'
                    },
                    marginTop: '10px'
                  }}
                  className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal]'
                  size='small'
                />
              </div>
            </div>

            <div className='mt-8'>
              <h3 className='font-semibold text-[16px] text-[#B8B8B8]'>
                Personal Information
              </h3>
              <div className='mt-5'>
                <h1 className='font-semibold text-[16px] text-[#808080] '>
                  Name
                </h1>
                <TextField
                  fullWidth
                  id='outlined-required'
                  placeholder=''
                  value='Angus Young'
                  sx={{
                    '& fieldset': {
                      // paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: '10px'
                    },
                    marginTop: '10px'
                  }}
                  className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                  size='small'
                />
              </div>
              <div className='mt-5'>
                <h1 className='font-semibold text-[16px] text-[#808080] '>
                  Gender
                </h1>
                <FormControl
                  row
                  className='mt-1'
                >
                  <RadioGroup
                    row
                    aria-labelledby='demo-radio-buttons-group-label'
                    defaultValue='male'
                    value='male'
                    name='radio-buttons-group'
                  >
                    <FormControlLabel
                      value='male'
                      className='text-[#6B6B6B] font-[400] text-[16px]'
                      control={
                        <Radio
                          sx={{
                            color: '#BCBCBC',
                            '&.Mui-checked': {
                              color: '#BCBCBC'
                            }
                          }}
                        />
                      }
                      label='Male'
                    />
                    <FormControlLabel
                      value='female'
                      className='text-[#6B6B6B] font-[400] text-[16px]'
                      control={
                        <Radio
                          sx={{
                            color: '#BCBCBC',
                            '&.Mui-checked': {
                              color: '#BCBCBC'
                            }
                          }}
                        />
                      }
                      label='Femail'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className='mt-5'>
                <h1 className='font-semibold text-[16px] text-[#808080] '>
                  Email
                </h1>
                <TextField
                  fullWidth
                  id='outlined-required'
                  placeholder=''
                  sx={{
                    '& fieldset': {
                      // paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: '10px'
                    },
                    marginTop: '10px'
                  }}
                  className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                  size='small'
                />
              </div>
              <div className='mt-5'>
                <h1 className='font-semibold text-[16px] text-[#808080] '>
                  Phone Number
                </h1>
                <TextField
                  fullWidth
                  id='outlined-required'
                  type='number'
                  placeholder=''
                  sx={{
                    '& fieldset': {
                      // paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: '10px'
                    },
                    marginTop: '10px'
                  }}
                  className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                  size='small'
                />
              </div>
              <div className='mt-5'>
                <h1 className='font-semibold text-[16px] text-[#808080] '>
                  Date of Birth
                </h1>
                <div className='date-picker'>
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <div className='flex w-full'>
                      <DatePicker
                        inputFormat='DD-MM-YYYY'
                        className='w-full'
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
                                // paddingLeft: (theme) => theme.spacing(2.5),
                                borderRadius: '10px'
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
              <div className='mt-5'>
                <h1 className='font-semibold text-[16px] text-[#808080] '>
                  Region
                </h1>
                <FormControl
                  fullWidth
                  sx={{
                    marginTop: '10px'
                  }}
                >
                  <Select
                    sx={{
                      borderRadius: '10px',
                      color: '#3F3F3F'
                    }}
                    className='h-10 text-sm py-0 text-[#3F3F3F] font-normal border-[#D0D0D0]'
                    defaultValue={1}
                    value={1}
                    onChange={(item) => {
                      console.log(item.target.value);
                    }}
                  >
                    <MenuItem
                      value={1}
                      className='text-sm'
                    >
                      Christianity
                    </MenuItem>
                    <MenuItem
                      value={2}
                      className='text-sm'
                    >
                      Christianity
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className='my-5'>
                <h1 className='font-semibold text-[16px] text-[#808080] '>
                  Address
                </h1>
                <TextField
                  fullWidth
                  multiline
                  rows={5}
                  value='Jl. in aja dulu ya kan...'
                  id='outlined-required'
                  placeholder=''
                  sx={{
                    '& fieldset': {
                      // paddingLeft: (theme) => theme.spacing(2.5),
                      borderRadius: '10px'
                    },
                    marginTop: '10px'
                    // height: '400px'
                  }}
                  className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                  size='small'
                />
              </div>
            </div>

            <div className='mt-[125px]'>
              <div className='flex flex-row align-center'>
                <h3 className='font-semibold text-[16px] text-[#B8B8B8]'>
                  {`MOTHER'S INFORMATION`}
                </h3>
                <Checkbox
                  checked={isVisible.mother}
                  onChange={() => handleChangeCheckBox('mother')}
                  sx={{
                    marginLeft: '7%',
                    bottom: '8px',
                    // color: '#FFFFFF',
                    '&.Mui-checked': {
                      color: 'cyan'
                    }
                  }}
                />
              </div>

              {isVisible.mother && (
                <>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Mother's Name`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      placeholder=''
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                      size='small'
                      value='Margaret Young'
                    />
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Mother's Citizenship`}
                    </h1>
                    <FormControl
                      row
                      className='mt-1'
                    >
                      <RadioGroup
                        row
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue='indonesian'
                        value='indonesian'
                        name='radio-buttons-group'
                      >
                        <FormControlLabel
                          value='indonesian'
                          className='text-[#6B6B6B] font-[400] text-[16px]'
                          control={
                            <Radio
                              sx={{
                                color: '#BCBCBC',
                                '&.Mui-checked': {
                                  color: '#BCBCBC'
                                }
                              }}
                            />
                          }
                          label='Indonesia Citizenship'
                        />
                        <FormControlLabel
                          value='foreign'
                          className='text-[#6B6B6B] font-[400] text-[16px]'
                          control={
                            <Radio
                              sx={{
                                color: '#BCBCBC',
                                '&.Mui-checked': {
                                  color: '#BCBCBC'
                                }
                              }}
                            />
                          }
                          label='Foreign Citizenship'
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Mother's Citizenship Identification Type`}
                    </h1>
                    <FormControl
                      fullWidth
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                    >
                      <Select
                        className='rounded-[10px] h-10 text-sm py-0 text-[#3F3F3F] font-normal] border-[#D0D0D0]'
                        defaultValue={1}
                        value={1}
                        onChange={(item) => {
                          console.log(item.target.value);
                        }}
                      >
                        <MenuItem
                          value={1}
                          className='text-sm'
                        >
                          KTP
                        </MenuItem>
                        <MenuItem
                          value={2}
                          className='text-sm'
                        >
                          KTP
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Mother's Citizenship Identification Number`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      placeholder=''
                      type='number'
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal]'
                      size='small'
                      value='0123456789'
                    />
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Mother's Email`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      placeholder=''
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                      size='small'
                      value='margaret@mail.com'
                    />
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Mother's Phone Number`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      type='number'
                      placeholder=''
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                      size='small'
                      value='081234567689'
                    />
                  </div>
                </>
              )}
            </div>

            <div className='mt-8'>
              <div className='flex flex-row align-center'>
                <h3 className='font-semibold text-[16px] text-[#B8B8B8]'>
                  {`FATHER'S INFORMATION`}
                </h3>
                <Checkbox
                  checked={isVisible.father}
                  onChange={() => handleChangeCheckBox('father')}
                  sx={{
                    marginLeft: '7%',
                    bottom: '8px',
                    // color: '#FFFFFF',
                    '&.Mui-checked': {
                      color: 'cyan'
                    }
                  }}
                />
              </div>
              {isVisible.father && (
                <>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Father's Name`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      placeholder=''
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                      size='small'
                      value='Malcolm Young'
                    />
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Father's Citizenship`}
                    </h1>
                    <FormControl
                      row
                      className='mt-1'
                    >
                      <RadioGroup
                        row
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue='indonesian'
                        value='indonesian'
                        name='radio-buttons-group'
                      >
                        <FormControlLabel
                          value='indonesian'
                          className='text-[#6B6B6B] font-[400] text-[16px]'
                          control={
                            <Radio
                              sx={{
                                color: '#BCBCBC',
                                '&.Mui-checked': {
                                  color: '#BCBCBC'
                                }
                              }}
                            />
                          }
                          label='Indonesia Citizenship'
                        />
                        <FormControlLabel
                          value='foreign'
                          className='text-[#6B6B6B] font-[400] text-[16px]'
                          control={
                            <Radio
                              sx={{
                                color: '#BCBCBC',
                                '&.Mui-checked': {
                                  color: '#BCBCBC'
                                }
                              }}
                            />
                          }
                          label='Foreign Citizenship'
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Father's Citizenship Identification Type`}
                    </h1>
                    <FormControl
                      fullWidth
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                    >
                      <Select
                        className='rounded-[10px] h-10 text-sm py-0 text-[#3F3F3F] font-normal] border-[#D0D0D0]'
                        defaultValue={1}
                        value={1}
                        onChange={(item) => {
                          console.log(item.target.value);
                        }}
                      >
                        <MenuItem
                          value={1}
                          className='text-sm'
                        >
                          KTP
                        </MenuItem>
                        <MenuItem
                          value={2}
                          className='text-sm'
                        >
                          KTP
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Father's Citizenship Identification Number`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      placeholder=''
                      type='number'
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal]'
                      size='small'
                      value='0123456789'
                    />
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Father's Email`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      placeholder=''
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                      size='small'
                      value='margaret@mail.com'
                    />
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Father's Phone Number`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      type='number'
                      placeholder=''
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                      size='small'
                      value='081234567689'
                    />
                  </div>
                </>
              )}
            </div>

            <div className='mt-8'>
              <div className='flex flex-row align-center'>
                <h3 className='font-semibold text-[16px] text-[#B8B8B8]'>
                  {`GUARDIAN'S INFORMATION`}
                </h3>
                <Checkbox
                  checked={isVisible.guardian}
                  onChange={() => handleChangeCheckBox('guardian')}
                  sx={{
                    marginLeft: '7%',
                    bottom: '8px',
                    // color: '#FFFFFF',
                    '&.Mui-checked': {
                      color: 'cyan'
                    }
                  }}
                />
              </div>
              {isVisible.guardian && (
                <>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Guardian's Name`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      placeholder=''
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                      size='small'
                      value='Malcolm Young'
                    />
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Guardian's Citizenship`}
                    </h1>
                    <FormControl
                      row
                      className='mt-1'
                    >
                      <RadioGroup
                        row
                        aria-labelledby='demo-radio-buttons-group-label'
                        defaultValue='indonesian'
                        value='indonesian'
                        name='radio-buttons-group'
                      >
                        <FormControlLabel
                          value='indonesian'
                          className='text-[#6B6B6B] font-[400] text-[16px]'
                          control={
                            <Radio
                              sx={{
                                color: '#BCBCBC',
                                '&.Mui-checked': {
                                  color: '#BCBCBC'
                                }
                              }}
                            />
                          }
                          label='Indonesia Citizenship'
                        />
                        <FormControlLabel
                          value='foreign'
                          className='text-[#6B6B6B] font-[400] text-[16px]'
                          control={
                            <Radio
                              sx={{
                                color: '#BCBCBC',
                                '&.Mui-checked': {
                                  color: '#BCBCBC'
                                }
                              }}
                            />
                          }
                          label='Foreign Citizenship'
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Guardian's Citizenship Identification Type`}
                    </h1>
                    <FormControl
                      fullWidth
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                    >
                      <Select
                        className='rounded-[10px] h-10 text-sm py-0 text-[#3F3F3F] font-normal] border-[#D0D0D0]'
                        defaultValue={1}
                        value={1}
                        onChange={(item) => {
                          console.log(item.target.value);
                        }}
                      >
                        <MenuItem
                          value={1}
                          className='text-sm'
                        >
                          KTP
                        </MenuItem>
                        <MenuItem
                          value={2}
                          className='text-sm'
                        >
                          KTP
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Guardian's Citizenship Identification Number`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      placeholder=''
                      type='number'
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal]'
                      size='small'
                      value='0123456789'
                    />
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Guardian's Email`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      placeholder=''
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                      size='small'
                      value='margaret@mail.com'
                    />
                  </div>
                  <div className='mt-5'>
                    <h1 className='font-semibold text-[16px] text-[#808080] '>
                      {`Guardian's Phone Number`}
                    </h1>
                    <TextField
                      fullWidth
                      id='outlined-required'
                      type='number'
                      placeholder=''
                      sx={{
                        '& fieldset': {
                          // paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: '10px'
                        },
                        marginTop: '10px'
                      }}
                      className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
                      size='small'
                      value='081234567689'
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export { DataChangeView };

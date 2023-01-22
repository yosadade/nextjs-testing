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
  ICFile_active,
  ICTrash,
  ICUpload
} from '../../../../../../public/assets';
import Card from '../../../../../components/Card';

const DATA_ASSIGNMENT_DETAIL = [
  {
    id: 1,
    label: 'Course',
    value: 'Mathematic'
  },
  {
    id: 2,
    label: 'Assignment Title',
    value: 'Tugas 8'
  },
  {
    id: 3,
    label: 'Schedule Date',
    value: 'June, 15 2022'
  },
  {
    id: 4,
    label: 'Schedule Time',
    value: '23.59'
  },
  {
    id: 5,
    label: 'End Date',
    value: 'June, 22 2022'
  },
  {
    id: 6,
    label: 'Schedule Time',
    value: '23.59'
  }
];

const Assignment = () => {
  const [show, setShow] = useState(10);
  const [isVisible, setIsVisible] = useState({
    examDetail: false,
    subMissionHistory: false,
    btnUpload: false,
    success: false
  });

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
          <h1 className={`text-title text-semibold text-2xl`}>Assignment</h1>
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
                <th className='text-base text-semibold py-3 text-left pl-5 w-[30%]'>
                  Assigment Title
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5 w-[20%]'>
                  Due Date
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5 w-[20%]'>
                  Due Time
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5  w-[10%]'>
                  Action
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
                  onClick={() => setIsVisible({ examDetail: true })}
                >
                  Tugas 7
                </td>
                <td className='pl-5 py-3 text-sm text-title'>June 15, 2022</td>
                <td className='pl-5 py-3 text-sm text-title'>23.59</td>
                <td className='pl-5 py-3 text-sm text-title '>
                  <button
                    className='p-0 m-0'
                    onClick={() => setIsVisible({ subMissionHistory: true })}
                  >
                    <Image
                      alt='file'
                      src={ICFile_active}
                      width={30}
                      height={30}
                    />
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  className='pl-5 py-3 text-sm text-title bg-lightBlue cursor-pointer'
                  style={{
                    color: '#04A9F5'
                  }}
                  onClick={() => setIsVisible({ examDetail: true })}
                >
                  Tugas 6
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  June 15, 2022
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  23.59
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  <button
                    className='p-0 m-0'
                    onClick={() => setIsVisible({ subMissionHistory: true })}
                  >
                    <Image
                      alt='file'
                      src={ICFile_active}
                      width={30}
                      height={30}
                    />
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  className='pl-5 py-3 text-sm text-title cursor-pointer'
                  style={{
                    color: '#04A9F5'
                  }}
                  onClick={() => setIsVisible({ examDetail: true })}
                >
                  Tugas 5
                </td>
                <td className='pl-5 py-3 text-sm text-title'>June 15, 2022</td>
                <td className='pl-5 py-3 text-sm text-title'>23.59</td>
                <td className='pl-5 py-3 text-sm text-title'>
                  <button
                    className='p-0 m-0'
                    onClick={() => setIsVisible({ subMissionHistory: true })}
                  >
                    <Image
                      alt='file'
                      src={ICFile_active}
                      width={30}
                      height={30}
                    />
                  </button>
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
      <Modal
        open={isVisible.subMissionHistory}
        onClose={() =>
          setIsVisible({
            subMissionHistory: false
          })
        }
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '800px',
          height: '590px',
          margin: 'auto'
        }}
      >
        <div className='m-auto px-6 py-5 bg-[#ffffff] justify-center items-center rounded-[20px]'>
          <h1 className='text-[#3F3F3F] text-center text-3xl font-bold '>
            Submission History
          </h1>
          <div className='mt-8'>
            <div className='table-responsive'>
              <table className='w-full'>
                <thead>
                  <tr className='bg-turquoise text-white justify-between'>
                    <th className='text-base text-semibold py-3 text-left pl-5 w-[45%]'>
                      File Name
                    </th>
                    <th className='text-base text-semibold py-3 text-left pl-5 w-[45%]'>
                      Submit Datetime
                    </th>
                    <th className='text-base text-semibold py-3 text-left pr-5  w-[10%]'>
                      Action
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
                      onClick={() => {}}
                    >
                      File1.pdf
                    </td>
                    <td className='pl-5 py-3 text-sm text-title'>
                      June 15, 2022; 22:20:21
                    </td>
                    <td className='pl-5 py-3 text-sm text-title'></td>
                  </tr>
                  <tr>
                    <td
                      className='pl-5 py-3 text-sm text-title bg-lightBlue cursor-pointer'
                      style={{
                        color: '#04A9F5'
                      }}
                      onClick={() => {}}
                    >
                      File2.pdf
                    </td>
                    <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                      June 15, 2022; 22:20:21
                    </td>
                    <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                      <button
                        className='p-0 m-0'
                        onClick={() => setIsVisible(!isVisible)}
                      >
                        <Image
                          alt='file'
                          src={ICCloudDownload}
                          width={30}
                          height={30}
                        />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className='pl-5 py-3 text-sm text-title'
                      style={{
                        color: '#04A9F5'
                      }}
                    >
                      File3.pdf
                    </td>
                    <td className='pl-5 py-3 text-sm text-title'>
                      June 15, 2022; 22:20:21
                    </td>
                    <td className='pl-5 py-3 text-sm text-title'></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='w-100% h-[1px] bg-[#D0D0D0] mt-8' />

          <div className='flex flex-row mt-6 justify-end'>
            <button
              className='py-3 px-12 rounded-[20px] text-[#1695C9] text-base font-semibold bg-[#FFFFFF] border-[1px] border-[#1695C9]'
              onClick={() => setIsVisible({ subMissionHistory: false })}
            >
              CLOSE
            </button>
            <div className='w-5' />
          </div>
        </div>
      </Modal>
      <Modal
        open={isVisible.examDetail}
        onClose={() => setIsVisible({ examDetail: false })}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '800px',
          height: '567px',
          margin: 'auto'
        }}
      >
        <div className='m-auto px-6 py-5 bg-[#ffffff] justify-center items-center rounded-[20px]'>
          <h1 className='text-[#3F3F3F] text-center text-3xl font-bold '>
            Assignment Detail
          </h1>
          <div className='w-100% h-[1px] bg-[#D0D0D0] mt-5' />
          {DATA_ASSIGNMENT_DETAIL.map((item) => {
            return (
              <div
                key={item.id}
                className={`flex flex-row ${item.id === 1 ? 'mt-11' : 'mt-3'}`}
              >
                <p className='text-[#808080] text-center text-base font-normal'>
                  {item.label}:
                </p>
                <p className='text-[#3F3F3F] text-center text-base font-semibold ml-1'>
                  {item.value}
                </p>
              </div>
            );
          })}
          <div className='flex flex-row justify-between items-center mt-8'>
            <div>
              <h1 className='text-[#AF4A6D] text-base font-semibold'>
                Please download the assignment below!
              </h1>
              <button
                className='flex flex-row border-[1px] border-[#04A9F5] rounded-[10px] text-[#0F1B40] text-sm font-semibold p-[10px] self-end mt-3'
                onClick={() => {}}
              >
                <Image
                  alt='Download'
                  src={ICCloudDownload}
                  className='mr-3'
                />
                Download Attachment
              </button>
            </div>
            <div className=''>
              <h1 className='text-[#AF4A6D] text-base font-semibold'>
                Upload your answer here!
              </h1>
              {!isVisible.btnUpload ? (
                <button
                  className='flex flex-row border-[1px] bg-[#1695C9] rounded-[10px] text-[#ffffff] text-sm font-semibold p-[10px] self-end mt-3 items-center ml-auto'
                  onClick={handleUploadAnswer}
                >
                  <Image
                    alt='Download'
                    src={ICUpload}
                    className='mr-3'
                  />
                  Upload Answer
                </button>
              ) : (
                <button
                  className='flex flex-row border-[1px] border-[#D0D0D0] rounded-[10px] text-[#3F3F3F] text-sm font-semibold p-[10px] self-end mt-3 items-center ml-auto divide-x'
                  onClick={handleUploadAnswer}
                >
                  Answer 1.pdf
                  <Image
                    alt='Remove'
                    src={ICTrash}
                    className='ml-3'
                  />
                </button>
              )}
            </div>
          </div>

          <div className='w-100% h-[1px] bg-[#D0D0D0] mt-8' />

          <div className='flex flex-row mt-6 justify-end'>
            <button
              className='py-3 px-12 rounded-[20px] text-[#1695C9] text-base font-semibold bg-[#FFFFFF] border-[1px] border-[#1695C9]'
              onClick={() =>
                setIsVisible({
                  examDetail: !isVisible.examDetail
                })
              }
            >
              CANCEL
            </button>
            <div className='w-5' />
            <button
              disabled={!isVisible.btnUpload}
              className={`py-3 px-12 rounded-[20px]  text-[#ffffff] text-base font-semibold ${
                isVisible.btnUpload ? 'bg-[#1695C9]' : 'bg-[#D0D0D0]'
              } `}
              onClick={() =>
                setIsVisible({
                  // examDetail: !isVisible.examDetail,
                  success: true
                })
              }
            >
              SUBMIT ANSWER
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={isVisible.success}
        onClose={() =>
          setIsVisible({
            success: false
          })
        }
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '600px',
          height: '600px',
          margin: 'auto'
        }}
      >
        <div className='m-auto px-6 py-12 bg-[#ffffff] justify-center items-center rounded-[20px]'>
          <Image
            alt='Check'
            src={ICCheck}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto'
            }}
          />

          <h1 className='text-[#3F3F3F] text-center text-3xl font-bold mt-8'>
            Success!
          </h1>
          <p className='text-[#3F3F3F] text-center text-base font-normal mt-[10px]'>
            Your Feedback has been sent!
          </p>
          <div className='flex flex-row mt-20 justify-center items-center self-center mx-auto '>
            <button
              className=' py-2 w-[227px] rounded-[20px] self-center text-[#ffffff] text-base font-semibold bg-[#1695C9]'
              onClick={() => setIsVisible({ success: false })}
            >
              OK
            </button>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default Assignment;

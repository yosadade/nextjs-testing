import { Modal, TextField } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { ICBack, ICCheck, ICRequest } from '../../../../../public/assets';
import Card from '../../../../components/Card';

const GradeperCourse = () => {
  const [isVisible, setIsVisible] = useState({
    appeal: false,
    success: false
  });
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
          <h1 className={`text-title text-semibold text-2xl`}>
            Grade per Course
          </h1>
          <p className={`font-normal text-lg text-[#3F3F3F]`}>Matematika</p>
        </div>
      </div>
      <div className='mt-8'>
        <div className='table-responsive'>
          <table className='w-full'>
            <thead>
              <tr className='bg-turquoise text-white'>
                <th className='text-base text-semibold py-3 text-left pl-5'>
                  Score Weight
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5'>
                  Student Grade
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5'>
                  Status
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='pl-5 py-3 text-sm text-title'>Assigment</td>
                <td className='pl-5 py-3 text-sm text-title'>60</td>
                <td className='pl-5 py-3 text-sm text-semibold text-[#DA1E28]'>
                  FAIL
                </td>
                <td
                  className='pl-5 py-3 text-sm text-[#04A9F5] cursor-pointer'
                  onClick={() =>
                    setIsVisible({
                      appeal: true
                    })
                  }
                >
                  Appeal
                </td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Exam
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  80
                </td>
                <td className='pl-5 py-3 text-sm text-semibold text-[#2AD000] bg-lightBlue'>
                  PASS
                </td>
                <td
                  className='pl-5 py-3 text-sm text-[#04A9F5] cursor-pointer bg-lightBlue'
                  onClick={() => setIsVisible(true)}
                >
                  Appeal
                </td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title'>Mid Exam</td>
                <td className='pl-5 py-3 text-sm text-title'>60</td>
                <td className='pl-5 py-3 text-sm text-semibold text-[#2AD000]'>
                  PASS
                </td>
                <td
                  className='pl-5 py-3 text-sm text-[#04A9F5] cursor-pointer'
                  onClick={() => setIsVisible(true)}
                >
                  Appeal
                </td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Final Exam
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  80
                </td>
                <td className='pl-5 py-3 text-sm text-semibold text-[#2AD000] bg-lightBlue'>
                  PASS
                </td>
                <td
                  className='pl-5 py-3 text-sm text-[#04A9F5] cursor-pointer bg-lightBlue'
                  onClick={() => setIsVisible(true)}
                >
                  Appeal
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Modal
        open={isVisible.appeal}
        onClose={() =>
          setIsVisible({
            appeal: !isVisible.appeal
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
            Appeal Form
          </h1>
          <div className='w-100% h-[1px] bg-[#D0D0D0] mt-5' />
          <div className='flex flex-row mt-11'>
            <p className='text-[#808080] text-center text-base font-normal'>
              Course:
            </p>
            <p className='text-[#3F3F3F] text-center text-base font-semibold ml-1'>
              Matemathic
            </p>
          </div>
          <div className='flex flex-row mt-3'>
            <p className='text-[#808080] text-center text-base font-normal'>
              Score Weight:
            </p>
            <p className='text-[#3F3F3F] text-center text-base font-semibold ml-1'>
              Assignment
            </p>
          </div>
          <div className='flex flex-row mt-3'>
            <p className='text-[#808080] text-center text-base font-normal'>
              Score:
            </p>
            <p className='text-[#3F3F3F] text-center text-base font-semibold ml-1'>
              60
            </p>
          </div>
          <div className='mt-8'>
            <h1>Reason</h1>
            <div className='mt-3'>
              <TextField
                placeholder=''
                size='small'
                sx={{
                  '& fieldset': {
                    // paddingLeft: (theme) => theme.spacing(2.5),
                    borderRadius: '10px'
                  }
                }}
                multiline
                rows={6}
                fullWidth
              />
            </div>
          </div>
          <div className='w-100% h-[1px] bg-[#D0D0D0] mt-8' />

          <div className='flex flex-row mt-6 justify-end'>
            <button
              className='py-3 px-12 rounded-[20px] text-[#1695C9] text-base font-semibold bg-[#FFFFFF] border-[1px] border-[#1695C9]'
              onClick={() =>
                setIsVisible({
                  appeal: !isVisible.appeal
                })
              }
            >
              CANCEL
            </button>
            <div className='w-5' />
            <button
              className='py-3 px-12 rounded-[20px]  text-[#ffffff] text-base font-semibold bg-[#1695C9]'
              onClick={() =>
                setIsVisible({
                  appeal: !isVisible.appeal,
                  success: true
                })
              }
            >
              SUBMIT
            </button>
          </div>
        </div>
      </Modal>
      {isVisible.success && (
        <Modal
          open={true}
          onClose={() =>
            setIsVisible({
              succes: false
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
              Your Appeal form has been sent!
            </p>
            <p className='text-[#3F3F3F] text-center text-base font-normal'>
              You will be notified in 3-5 school days
            </p>
            <div className='flex flex-row mt-20 justify-center items-center self-center mx-auto '>
              <button
                className=' py-2 w-[227px] rounded-[20px] self-center text-[#ffffff] text-base font-semibold bg-[#1695C9]'
                onClick={() =>
                  setIsVisible({
                    success: !isVisible.success
                  })
                }
              >
                OK
              </button>
            </div>
          </div>
        </Modal>
      )}
    </Card>
  );
};

export default GradeperCourse;

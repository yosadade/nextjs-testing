import { Modal, TextField } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { ICBack, ICCheck, ICClip } from '../../../../../public/assets';
import Card from '../../../../components/Card';

const FeedbackView = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <Card
        className='w-full h-full'
        breadcumb
      >
        <div
          className='flex flex-row justify-between items-center '
          style={{
            alignItems: 'center'
          }}
        >
          <div className='flex flex-row items-center'>
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
            <h1 className={`text-title text-semibold text-2xl`}>Feedback</h1>
          </div>
          <button
            className='py-2 px-12 rounded-[20px] text-[#ffffff] text-[18px] font-semibold bg-[#1695C9] ml-5'
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
        <div className='mt-8'>
          <h1 className='font-semibold text-[16px] text-[#808080]'>
            Feedback Title
          </h1>
          <TextField
            fullWidth
            id='outlined-required'
            placeholder=''
            value='Input Feedback title here'
            sx={{
              input: {
                color: '#B8B8B8',
                fontWeight: '400'
              },
              '& fieldset': {
                // paddingLeft: (theme) => theme.spacing(2.5),
                borderRadius: '10px'
              },
              marginTop: '10px'
            }}
            className='rounded-lg h-10 text-sm py-0 px-1 text-[#3F3F3F] font-normal'
            size='small'
          />
          <h1 className='font-semibold text-[16px] text-[#808080] mt-5'>
            Feedback
          </h1>
          <TextField
            fullWidth
            multiline
            rows={6}
            value=''
            id='outlined-required'
            placeholder=''
            sx={{
              input: {
                color: '#B8B8B8'
              },
              '& fieldset': {
                // paddingLeft: (theme) => theme.spacing(2.5),
                borderRadius: '10px'
              },
              marginTop: '10px'
            }}
            className='rounded-lg h-10 text-sm py-0 px-1 font-normal'
            size='small'
          />
          <button className='flex flex-row items-center mt-[162px] py-2 px-5 rounded-[10px] border-[#D0D0D0] border-[1px]'>
            <Image
              alt='attach file'
              src={ICClip}
              width={22}
              height={22}
            />
            <p className='text-[#808080] text-sm font-normal ml-5 '>
              Add Attachment
            </p>
          </button>
          <p className='text-[#B8B8B8] text-sm font-normal mt-5'>
            *File must be .jpg .jpeg .png
          </p>
        </div>
      </Card>
      {isVisible && (
        <Modal
          open={true}
          onClose={() => {}}
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
                onClick={handleSubmit}
              >
                OK
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default FeedbackView;

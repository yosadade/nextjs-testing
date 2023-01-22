import { Avatar, Modal, TextField, Input } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import { useState } from 'react';
import {
  ICBack,
  ICCheck,
  ICClip,
  ICCloudDownload,
  ICComment,
  ICComment_active,
  ICPencil,
  ICRequest,
  ICSend,
  ICToggleUp,
  ICTrash
} from '../../../../../../public/assets';
import Card from '../../../../../components/Card';

const TABBAR = [
  {
    id: 1,
    title: 'All Thread'
  },
  {
    id: 2,
    title: 'My Thread'
  }
];

const ForumDiscussion = () => {
  const [activeTabbar, setActiveTabbar] = useState(1);
  const [isModal, setIsModal] = useState({
    createThread: false,
    edit: false,
    delete: false
  });
  const [isVisisibleThread, setIsVisibleThread] = useState(false);

  const handleOpenModalCreate = () => {
    setIsModal({
      ...isModal,
      createThread: !isModal.createThread
    });
  };

  const handleOpenModalEdit = () => {
    setIsModal({
      ...isModal,
      edit: !isModal.edit
    });
  };

  const handleOpenModalDelete = () => {
    setIsModal({
      ...isModal,
      delete: !isModal.delete
    });
  };
  return (
    <Card
      breadcumb
      className='w-full h-full'
    >
      <div
        className='flex flex-row '
        style={{
          alignItems: 'center'
        }}
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
        <h1 className={`text-title text-semibold text-2xl`}>
          Forum Discussion
        </h1>
      </div>
      <div className='w-full h-[1px] bg-[#D0D0D0] mt-8' />
      <div
        className={`${
          activeTabbar === 2 ? 'ml-[10%]' : 'ml-0'
        }  w-[8%] h-[1.5px] bg-[#1695C9]`}
      />
      <div className='flex flex-row mt-5 '>
        {TABBAR.map((item, idx) => {
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
      {activeTabbar === 1 && (
        <>
          <div className='flex flex-row border-solid border-[1px] border-[#D0D0D0] rounded-[10px] mt-7 py-5 px-9 items-center'>
            <Avatar
              src='/assets/images/avatar.png'
              alt='avatar'
              sx={{
                width: '62px',
                height: '62px'
              }}
            />
            <button
              onClick={() =>
                setIsModal({
                  createThread: true
                })
              }
            >
              <h1 className='text-[#3F3F3F] text-sm font-normal ml-6'>{`What's going on?`}</h1>
            </button>
          </div>
          <div className='border-solid border-[1px] border-[#D0D0D0] rounded-[10px] mt-7 py-5 px-9 align-middle'>
            <div className='flex flex-row  align-middle'>
              <Avatar
                src='/assets/images/avatar.png'
                alt='avatar'
                sx={{
                  width: '62px',
                  height: '62px'
                }}
              />
              <div className='ml-10'>
                <p className='text-[#3F3F3F] text-sm font-normal'>
                  Angus Young
                </p>
                <h1 className='text-[#3F3F3F] text-xl font-semibold mt-1'>{`Rock and Roll Ain't Noise Pollution Festival`}</h1>
                <p className='text-[#808080] text-sm font-normal mt-1'>
                  24 October 2022, 10:00:01
                </p>
              </div>
            </div>
            <h1 className='text-[#3F3F3F] text-base font-normal mt-7'>
              Don’t miss the biggest rock and roll event on 25th October 2022,
              for further information check out the attachement!
            </h1>
            <div className='pagination flex items-center justify-end mt-7'>
              <button className='flex flex-row border-[1px] border-[#04A9F5] rounded-[10px] text-[#0F1B40] text-sm font-semibold p-[10px] self-end'>
                <Image
                  alt='Download'
                  src={ICCloudDownload}
                  className='mr-3'
                />
                Download Attachment
              </button>
            </div>
            <div className='w-full h-[1px] bg-[#D0D0D0] mt-7' />
            <div className='flex flex-row justify-between align-middle mt-6'>
              <div
                className='flex flex-row align-middle cursor-pointer'
                onClick={() => setIsVisibleThread(!isVisisibleThread)}
              >
                <Image
                  alt='Comment'
                  src={ICComment_active}
                  className='mr-3'
                />
                <h1 className='text-[#1695C9] text-base font-semibold'>
                  Replay Thread
                </h1>
              </div>
              <div className='flex flex-row align-middle'>
                <Image
                  alt='Comment'
                  src={ICComment}
                  className='mr-3'
                />
                <h1 className='text-[#808080] text-base font-semibold'>2</h1>
              </div>
            </div>
            {isVisisibleThread && (
              <div className='mt-4'>
                <div className='flex flex-row'>
                  <TextField
                    placeholder='Input your reply'
                    fullWidth
                  />
                  <button className='py-[9px] px-[14px] bg-[#1695C9] rounded-[10px] flex flex-row items-center justify-center ml-5'>
                    <Image
                      src={ICSend}
                      alt='Send'
                    />
                    <h1 className='text-[#ffffff] text-base font-semibold ml-3'>
                      Send
                    </h1>
                  </button>
                  <button
                    className='py-[9px] ml-7'
                    onClick={() => setIsVisibleThread(false)}
                  >
                    <Image
                      src={ICToggleUp}
                      alt='Send'
                    />
                  </button>
                </div>
                <div className='mt-5'>
                  <div className='flex flex-row items-center '>
                    <Avatar
                      src='/assets/images/avatar.png'
                      alt='avatar'
                      sx={{
                        width: '33px',
                        height: '33px'
                      }}
                    />
                    <div className='ml-[13px]'>
                      <h1 className='text-[#3F3F3F] text-base font-semibold'>
                        Ryu Jin
                      </h1>
                      <p className='text-[#3F3F3F] text-[12px] font-normal'>
                        10 minutes ago
                      </p>
                    </div>
                  </div>
                  <h1 className='mt-[10px] text-[#3F3F3F] text-base font-normal'>{`Can't wait to see it`}</h1>
                </div>
                <div className='mt-5'>
                  <div className='flex flex-row items-center '>
                    <Avatar
                      src='/assets/images/avatar.png'
                      alt='avatar'
                      sx={{
                        width: '33px',
                        height: '33px'
                      }}
                    />
                    <div className='ml-[13px]'>
                      <h1 className='text-[#3F3F3F] text-base font-semibold'>
                        Sedgewick Bell
                      </h1>
                      <p className='text-[#3F3F3F] text-[12px] font-normal'>
                        10 minutes ago
                      </p>
                    </div>
                  </div>
                  <h1 className='mt-[10px] text-[#3F3F3F] text-base font-normal'>{`Can't wait to see it`}</h1>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {activeTabbar === 2 && (
        <>
          <div className='flex flex-row border-solid border-[1px] border-[#D0D0D0] rounded-[10px] mt-7 py-5 px-9 align-middle items-center'>
            <Avatar
              src='/assets/images/avatar.png'
              alt='avatar'
              sx={{
                width: '62px',
                height: '62px'
              }}
            />
            <button onClick={handleOpenModalCreate}>
              <h1 className='text-[#3F3F3F] text-sm font-normal ml-6'>{`What's going on?`}</h1>
            </button>
          </div>
          <div className='border-solid border-[1px] border-[#D0D0D0] rounded-[10px] mt-7 py-5 px-9 align-middle'>
            <div className='flex flex-row justify-between align-top'>
              <div className='flex flex-row  align-middle'>
                <Avatar
                  src='/assets/images/avatar.png'
                  alt='avatar'
                  sx={{
                    width: '62px',
                    height: '62px'
                  }}
                />
                <div className='ml-10'>
                  <p className='text-[#3F3F3F] text-sm font-normal'>
                    Angus Young
                  </p>
                  <h1 className='text-[#3F3F3F] text-xl font-semibold mt-1'>{`Rock and Roll Ain't Noise Pollution Festival`}</h1>
                  <p className='text-[#808080] text-sm font-normal mt-1'>
                    24 October 2022, 10:00:01
                  </p>
                </div>
              </div>
              <div className='flex flex-row justify-start align-top'>
                <button onClick={handleOpenModalEdit}>
                  <Image
                    alt='Edit'
                    src={ICPencil}
                    className='mr-3'
                  />
                </button>
                <button onClick={handleOpenModalDelete}>
                  <Image
                    alt='Download'
                    src={ICTrash}
                    className=''
                  />
                </button>
              </div>
            </div>

            <h1 className='text-[#3F3F3F] text-base font-normal mt-7'>
              Don’t miss the biggest rock and roll event on 25th October 2022,
              for further information check out the attachement!
            </h1>
            <div className='pagination flex items-center justify-end mt-7'>
              <button className='flex flex-row border-[1px] border-[#04A9F5] rounded-[10px] text-[#0F1B40] text-sm font-semibold p-[10px] self-end'>
                <Image
                  alt='Download'
                  src={ICCloudDownload}
                  className='mr-3'
                />
                Download Attachment
              </button>
            </div>
            <div className='w-full h-[1px] bg-[#D0D0D0] mt-7' />
            <div className='flex flex-row justify-between align-middle mt-6'>
              <div className='flex flex-row align-middle'>
                <Image
                  alt='Comment'
                  src={ICComment_active}
                  className='mr-3'
                />
                <h1 className='text-[#1695C9] text-base font-semibold'>
                  Replay Thread
                </h1>
              </div>
              <div className='flex flex-row align-middle'>
                <Image
                  alt='Comment'
                  src={ICComment}
                  className='mr-3'
                />
                <h1 className='text-[#808080] text-base font-semibold'>2</h1>
              </div>
            </div>
          </div>
        </>
      )}
      <Modal
        open={isModal.createThread}
        onClose={handleOpenModalCreate}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '800px',
          height: '600px',
          margin: 'auto'
        }}
      >
        <div className=' p-6 bg-[#ffffff] justify-center items-center rounded-[20px]'>
          <div>
            <h2
              id='parent-modal-title'
              className='text-[#3F3F3F] text-2xl font-semibold text-center'
            >
              Create Thread
            </h2>
            <div className='w-full h-[1px] bg-[#D0D0D0] mt-5' />
            <div className='flex flex-row items-center mt-7'>
              <Avatar
                src='/assets/images/avatar.png'
                alt='avatar'
                sx={{
                  width: '62px',
                  height: '62px'
                }}
              />
              <div className='ml-4'>
                <p className='text-[#3F3F3F] text-sm font-normal'>
                  Angus Young
                </p>
              </div>
            </div>
            <div className='mt-8'>
              <Input
                placeholder='Input topic here'
                disableUnderline={true}
                sx={{ input: { color: '#B8B8B8', fontSize: '16px' } }}
              />
              <div className='w-full h-[1px] bg-[#D0D0D0] my-5' />
              <Input
                placeholder='Input thread here'
                disableUnderline={true}
                sx={{ input: { color: '#B8B8B8', fontSize: '16px' } }}
              />
            </div>
          </div>
          <div className='flex flex-row items-center mt-[162px]'>
            <button>
              <Image
                alt='attach file'
                src={ICClip}
              />
            </button>
            <p className='text-[#808080] text-sm font-normal'>
              Attach file (.jpeg, .jgp, .png, .doc, .docx, .ppt, .pptx, .pdf)
            </p>
          </div>
          <div className='w-full h-[1px] bg-[#D0D0D0] mt-3' />
          <div className='flex flex-row my-6 justify-end'>
            <button
              className='py-2 px-10 rounded-[20px] bg-[#ffffff] text-[#1695C9] text-base border-[1px] border-[#1695C9] font-semibold'
              onClick={() => setIsModal(!isModal)}
            >
              CANCEL
            </button>
            <button
              className='py-2 px-10 rounded-[20px] text-[#ffffff] text-base font-semibold bg-[#1695C9] ml-5'
              onClick={() => setIsModal(!isModal)}
            >
              POST
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={isModal.edit}
        onClose={handleOpenModalEdit}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: '800px',
          height: '600px',
          margin: 'auto'
        }}
      >
        <div className=' p-6 bg-[#ffffff] justify-center items-center rounded-[20px]'>
          <div>
            <h2
              id='parent-modal-title'
              className='text-[#3F3F3F] text-2xl font-semibold text-center'
            >
              Edit Thread
            </h2>
            <div className='w-full h-[1px] bg-[#D0D0D0] mt-5' />
            <div className='flex flex-row items-center mt-7'>
              <Avatar
                src='/assets/images/avatar.png'
                alt='avatar'
                sx={{
                  width: '62px',
                  height: '62px'
                }}
              />
              <div className='ml-4'>
                <p className='text-[#3F3F3F] text-sm font-normal'>
                  Angus Young
                </p>
              </div>
            </div>
            <div className='mt-8'>
              <Input
                placeholder='Input topic here'
                disableUnderline={true}
                sx={{ input: { color: '#B8B8B8', fontSize: '16px' } }}
              />
              <div className='w-full h-[1px] bg-[#D0D0D0] my-5' />
              <Input
                placeholder='Input thread here'
                disableUnderline={true}
                sx={{ input: { color: '#B8B8B8', fontSize: '16px' } }}
              />
            </div>
          </div>
          <div className='flex flex-row items-center mt-[162px]'>
            <button>
              <Image
                alt='attach file'
                src={ICClip}
              />
            </button>
            <p className='text-[#808080] text-sm font-normal'>
              Attach file (.jpeg, .jgp, .png, .doc, .docx, .ppt, .pptx, .pdf)
            </p>
          </div>
          <div className='w-full h-[1px] bg-[#D0D0D0] mt-3' />
          <div className='flex flex-row my-6 justify-end'>
            <button
              className='py-2 px-10 rounded-[20px] bg-[#ffffff] text-[#1695C9] text-base border-[1px] border-[#1695C9] font-semibold'
              onClick={() => setIsModal(!isModal)}
            >
              CANCEL
            </button>
            <button
              className='py-2 px-10 rounded-[20px] text-[#ffffff] text-base font-semibold bg-[#1695C9] ml-5'
              onClick={() => setIsModal(!isModal)}
            >
              POST
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        open={isModal.delete}
        onClose={handleOpenModalDelete}
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
            alt='attach file'
            src={ICRequest}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto'
            }}
          />

          <h1 className='text-[#3F3F3F] text-center text-3xl font-bold mt-8'>
            Delete Thread?
          </h1>
          <p className='text-[#3F3F3F] text-center text-base font-normal mt-[10px]'>
            Are you sure to delete thread?
          </p>
          <div className='flex flex-row mt-20 justify-center'>
            <button
              className=' py-2 w-[128px] rounded-[20px] self-center text-[#FFFFFF] text-base font-semibold bg-[#AF4A6D]'
              onClick={() => setIsModal(!isModal)}
            >
              NO
            </button>
            <div className='w-10' />
            <button
              className=' py-2 w-[128px] rounded-[20px] self-center text-[#ffffff] text-base font-semibold bg-[#1695C9]'
              onClick={() => setIsModal(!isModal)}
            >
              YES
            </button>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default ForumDiscussion;

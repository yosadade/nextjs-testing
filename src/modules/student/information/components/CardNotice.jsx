import Image from 'next/image';
import PropTypes from 'prop-types';
import { ICCloudDownload } from '../../../../../public/assets';

const CardNotice = ({ title, date, subTitle }) => {
  return (
    <div className='border-solid border-[1px] border-[#D0D0D0] rounded-[10px] mb-4 p-7'>
      <h3 className='text-[#3F3F3F] text-xl font-semibold'>{title}</h3>
      <p className='text-[#808080] text-sm font-normal mt-2'>{date}</p>
      <p className='text-[#3F3F3F] text-sm font-base mt-10'>{subTitle}</p>
      <div className='pagination flex items-center justify-end gap-2 mt-5'>
        <button
          className='text-[#04A9F5] text-base font-semibold justify-self-end self-end'
          style={{}}
        >
          View Less
        </button>
      </div>
      <div className='pagination flex items-center justify-end mt-5'>
        <button className='flex flex-row border-[1px] border-[#04A9F5] rounded-[10px] text-[#0F1B40] text-sm font-semibold p-[10px] self-end'>
          <Image
            alt='Download'
            src={ICCloudDownload}
            className='mr-3'
          />
          Download Attachment
        </button>
      </div>
    </div>
  );
};

export default CardNotice;

CardNotice.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  subTitle: PropTypes.string
};

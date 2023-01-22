import Image from 'next/image';
import PropTypes from 'prop-types';
import { ICNext_active } from '../../../../../public/assets';

const CardNotes = ({ title, date, onClick, value }) => {
  return (
    <div
      className='rounded-[20px] justify-between p-5 mb-5 cursor-pointer w-[232px] h-[300px] bg-[#FFF6D4]'
      onClick={onClick}
    >
      <h3 className='text-[#3F3F3F] text-[16px] font-semibold'>{title}</h3>
      <p className='text-[#808080] text-[12px] font-normal mt-1'>{date}</p>
      <h3 className='text-[#3F3F3F] text-[14px] font-normal mt-5'>{value}</h3>
      <div className='flex flex-row justify-between'>
        <div></div>
        <button
          onClick={onClick}
          className='mt-5'
        >
          <Image
            alt='graduation'
            src={ICNext_active}
            className=''
          />
        </button>
      </div>
    </div>
  );
};

export default CardNotes;

CardNotes.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func
};

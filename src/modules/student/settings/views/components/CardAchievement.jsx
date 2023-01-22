import Image from 'next/image';
import PropTypes from 'prop-types';
import { ICFile } from '../../../../../../public/assets';

const CardAchievement = ({ image, title, author, time, achivement }) => {
  return (
    <div className='flex flex-row align-middle border-solid border-[1px] border-[#D0D0D0] rounded-[20px] justify-between mb-4'>
      <div className='flex flex-row'>
        <Image
          alt='graduation'
          src={image}
          width={190}
          height={190}
          className='rounded-[20px]'
        />
        <div className='align-middle justify-center my-auto ml-8'>
          <h3 className='text-[#0F1B40] text-2xl font-semibold'>{title}</h3>
          <p className='text-[#3F3F3F] text-[16px] font-semibold mt-[10px]'>
            {author}
          </p>
          <p className='text-[#808080] text-[16px] font-normal mt-[10px]'>
            {time}
          </p>
          <p className='text-[#808080] text-[16px] font-normal mt-[10px]'>
            {achivement}
          </p>
        </div>
      </div>

      <Image
        alt='graduation'
        src={ICFile}
        className='my-auto mr-8'
      />
    </div>
  );
};

export default CardAchievement;

CardAchievement.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string,
  achivement: PropTypes.string
};

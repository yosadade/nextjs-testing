import Image from 'next/image';
import PropTypes from 'prop-types';

const CardGraduation = ({ image, title, author, time }) => {
  return (
    <div className='flex flex-row align-middle border-solid border-[1px] border-[#D0D0D0] rounded-[20px] mb-4'>
      <Image
        alt='graduation'
        src={image}
        width={190}
        height={190}
        className='rounded-[20px]'
      />
      <div className='align-middle justify-center my-auto ml-8'>
        <h3 className='text-[#0F1B40] text-2xl font-semibold'>{title}</h3>
        <div>
          <p className='text-[#3F3F3F] text-[16px] font-semibold mt-[10px]'>
            {author}
          </p>
          <p className='text-[#808080] text-[16px] font-normal mt-[10px]'>
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardGraduation;

CardGraduation.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string
};

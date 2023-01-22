import Image from 'next/image';
import PropTypes from 'prop-types';
import { ICNext } from '../../../../../public/assets';
import ILOnlineCourse from '../../../../../public/assets/images/online_course.png';

const CardCourse = ({ course, lecture, onClick }) => {
  return (
    <div
      className='flex flex-row align-middle border-solid border-[1px] border-[#D0D0D0] rounded-[20px] justify-between mb-5 cursor-pointer'
      onClick={onClick}
    >
      <div className='flex flex-row'>
        <Image
          alt='graduation'
          src={ILOnlineCourse}
          width={150}
          height={150}
          className='rounded-[20px]'
        />
        <div className='align-middle justify-center my-auto ml-8'>
          <h3 className='text-[#0F1B40] text-[32px] font-semibold'>{course}</h3>
          <p className='text-[#808080] text-[16px] font-normal'>{lecture}</p>
        </div>
      </div>
      <button onClick={onClick}>
        <Image
          alt='graduation'
          src={ICNext}
          className='my-auto mr-8'
        />
      </button>
    </div>
  );
};

export default CardCourse;

CardCourse.propTypes = {
  title: PropTypes.string,
  course: PropTypes.string,
  lecture: PropTypes.string,
  onClick: PropTypes.func
};

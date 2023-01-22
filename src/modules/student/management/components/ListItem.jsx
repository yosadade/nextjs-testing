import { Paper } from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';

const ListItem = ({ data }) => {
  return (
    <Paper
      variant='outlined'
      className='p-5 flex justify-between items-center'
      sx={{
        borderRadius: '10px'
      }}
    >
      <div className='content flex flex-col justify-start items-start gap-2'>
        <div className='flex justify-start items-center gap-7'>
          <span
            className={`${
              data?.category ? '' : 'hidden'
            } text-semibold text-base text-listCategory uppercase`}
          >
            {data?.category}
          </span>
          <h4 className='text-title text-base text-semibold'>{data?.title}</h4>
        </div>
        <span className='text-secondary text-sm font-normal'>{data?.time}</span>
      </div>
      <div className='action'>
        <Link
          href='/'
          className='cursor-pointer text-semibold no-underline text-base text-turquoise'
        >
          View All
        </Link>
      </div>
    </Paper>
  );
};

export default ListItem;
ListItem.propTypes = {
  data: PropTypes.object
};

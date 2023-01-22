import { ArrowForwardIosOutlined } from '@mui/icons-material';
import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { PropTypes } from 'prop-types';

const Card = ({
  className = '',
  children,
  style = {},
  headerTitle,
  headerRightTitle,
  breadcumb,
  pathTitle
}) => {
  const { query } = useRouter();
  const { path, main_path } = query;
  const breadcumbItem = useMemo(() => {
    return [
      <Link
        className='text-linkBlue text-xs capitalize'
        href={'/'}
        key={main_path}
      >
        {main_path}
      </Link>,
      <span
        className='text-secondary text-xs capitalize'
        key={path}
      >
        {pathTitle || path}
      </span>
    ];
  }, [main_path, path, pathTitle]);
  return (
    <div
      className={`custom-card bg-white flex flex-col ${className}`}
      style={style}
    >
      <div
        style={{
          marginBottom: 22
        }}
        className={`${breadcumb ? '' : 'hidden'}`}
      >
        <Breadcrumbs
          separator={<ArrowForwardIosOutlined style={{ fontSize: 10 }} />}
          aria-label='breadcrumb'
        >
          {breadcumbItem}
        </Breadcrumbs>
      </div>
      <div
        className={`custom-card-header flex justify-between items-center mb-7 ${
          headerTitle || headerRightTitle ? '' : 'hidden'
        }`}
      >
        <div>
          <h1
            className={`text-title text-semibold text-2xl ${
              headerTitle ? '' : 'hidden'
            }`}
          >
            {headerTitle}
          </h1>
        </div>
        <div>
          <button className='btn text-base text-turquoise'>
            {headerRightTitle}
          </button>
        </div>
      </div>
      <div
        className='mt-0.5 flex-1'
        style={{
          overflowY: 'overlay'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.Component,
  style: PropTypes.object,
  headerRightTitle: PropTypes.string,
  headerTitle: PropTypes.string,
  breadcumb: PropTypes.boolean,
  pathTitle: PropTypes.string
};

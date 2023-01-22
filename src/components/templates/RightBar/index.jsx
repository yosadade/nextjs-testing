import moment from 'moment';
import Card from '../../Card';
import EventAgenda from '../../EventAgenda';
import Calendar from './Calendar';

const RightBar = () => {
  return (
    <div className='bg-bgRightBar rightbar py-10 px-6 gap-7 flex flex-col'>
      <Card>
        <Calendar />
      </Card>
      <Card className='right-agenda-card'>
        <div className='header mb-7 sticky top-0 bg-white z-50 pb-3'>
          <h1 className='text-title text-lg text-semibold font-bold mb-2.5'>
            Upcoming Events
          </h1>
          <h3 className='text-secondary text-sm'>
            {moment().format('dddd , Do MMMM YYYY')}
          </h3>
        </div>
        <EventAgenda />
      </Card>
    </div>
  );
};

export default RightBar;

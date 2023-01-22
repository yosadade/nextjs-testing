import { AccessTime } from '@mui/icons-material';
import { Paper } from '@mui/material';
import moment from 'moment';
import { getSafe } from '../../../../../utils';
import Card from '../../../../components/Card';
import EventAgenda from '../../../../components/EventAgenda';
import ListItem from '../components/ListItem';

const Dashboard = () => {
  const item = [
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00'
    },
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00'
    },
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00'
    },
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00'
    }
  ];
  const item1 = [
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00',
      category: 'EXAM'
    },
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00',
      category: 'assigment'
    },
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00',
      category: 'Tuton fee'
    },
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00',
      category: 'EXAM'
    },
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00',
      category: 'EXAM'
    },
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00',
      category: 'EXAM'
    },
    {
      title: 'Pengumuman Jadwal Kelulusan',
      time: '24 Oktober 2022, 10:00:00',
      category: 'EXAM'
    }
  ];
  return (
    <div className=' flex flex-col gap-5'>
      <div className='flex gap-5 items-start'>
        <Card
          className='w-1/2'
          style={{
            height: '450px',
            overflowY: 'overlay'
          }}
          headerTitle='Upcoming Events'
        >
          <div className='container'>
            <EventAgenda />
          </div>
        </Card>
        <Card
          className='w-1/2'
          style={{
            height: '450px',
            overflowY: 'overlay'
          }}
          headerTitle='Global Noticeboard'
          headerRightTitle='View All'
          headerRightFunc={() => {}}
        >
          <div className='wrapper flex flex-1 overflow-y-scroll flex-col gap-5'>
            {getSafe(() => item, []).map((data, idx) => {
              return (
                <ListItem
                  data={data}
                  key={idx}
                />
              );
            })}
          </div>
        </Card>
      </div>
      <Card
        className='w-full'
        headerTitle={'To Do List'}
        style={{
          maxHeight: 613
        }}
      >
        <div className='wrapper flex flex-1 overflow-y-scroll flex-col gap-5'>
          {getSafe(() => item1, []).map((data, idx) => {
            return (
              <ListItem
                data={data}
                key={idx}
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export { Dashboard };

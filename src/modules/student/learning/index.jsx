import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Card from '../../../components/Card';
import Navbar from '../../../components/templates/Navbar';
import RightBar from '../../../components/templates/RightBar';
import CardCourse from './components/CardCourse';
import Overview from './views/overview';
import Syllabus from './views/syllabus';
import Noticeboard from './views/noticeboard';
import GradeperCourse from './views/grade_per_course';
import Attendance from './views/attendance';
import Exam from './views/exam';
import Assignment from './views/syllabus/assignment';
import Notes from './views/syllabus/notes';
import NavbarSyllabus from './components/NavbarSyllabus';
import {
  ListItemNavbarSyllabus,
  subMenuLearning
} from './components/ListItemNavbarSyllabus';
import { IconButton } from '@mui/material';
import { NotificationsNone } from '@mui/icons-material';
import { getSafe } from '../../../../utils';
import Quizzez from './views/syllabus/quizzez';
import Poll from './views/syllabus/poll';
import LiveLearning from './views/syllabus/live_learning';
import ForumDiscussion from './views/syllabus/forum_discussion';
import LearningMaterials from './views/syllabus/learning_materials';

const DATA = [
  {
    course: 'Matematika',
    lecture: 'Bazatulo Ndraha'
  },
  {
    course: 'Bahasa Indonesia',
    lecture: 'Dewi Ratnasari S.Si'
  },
  {
    course: 'Bahasa Inggris',
    lecture: 'Alan Hattington'
  },
  {
    course: 'Kimia',
    lecture: 'Nani Juriah'
  },
  {
    course: 'Fisika',
    lecture: 'Agoes Sulistiyanto'
  }
];

const Learning = () => {
  const [next, setNext] = useState(false);
  const [active, setActive] = useState('Learning Material');
  const [time, setTime] = useState('');

  const router = useRouter();
  const { main_path, path } = router.query;
  console.log(main_path, path);

  const { isVisible } = useSelector((store) => store.learningMaterial);

  const onHandleNext = () => {
    setNext(!next);
  };

  const learningRoute =
    path === 'overview' ? (
      <Overview />
    ) : path === 'syllabus' ? (
      <Syllabus />
    ) : path === 'noticeboard' ? (
      <Noticeboard />
    ) : path === 'grade-per-course' ? (
      <GradeperCourse />
    ) : path === 'attendance' ? (
      <Attendance />
    ) : path === 'exam' ? (
      <Exam />
    ) : (
      <Overview />
    );

  const subMenulearningRoute =
    active === 'Learning Material' ? (
      <LearningMaterials />
    ) : active === 'Assignment' ? (
      <Assignment />
    ) : active === 'Notes' ? (
      <Notes />
    ) : active === 'Quizzez' ? (
      <>
        <Quizzez />
      </>
    ) : active === 'Poll' ? (
      <>
        <Poll />
      </>
    ) : active === 'Forum Discussion' ? (
      <ForumDiscussion />
    ) : active === 'Live Learning' ? (
      <LiveLearning />
    ) : (
      <>
        <h1>learning-material</h1>
      </>
    );
  return (
    <>
      {!next ? (
        <Card
          breadcumb
          pathTitle='Choose Course'
          className='w-full h-full'
          headerTitle='Odd 2022/2023'
        >
          {DATA.map((item) => {
            return (
              <CardCourse
                key={item.course}
                course={item.course}
                lecture={item.lecture}
                onClick={onHandleNext}
              />
            );
          })}
        </Card>
      ) : (
        <>
          {isVisible.isVisible ? (
            <>
              <div className='w-full bg-white px-8 py-7 flex justify-between items-center'>
                <div className='menu-navbar flex items-center justify-start gap-5'>
                  {getSafe(() => subMenuLearning, [])?.map((item, idx) => {
                    return (
                      <ListItemNavbarSyllabus
                        key={idx}
                        data={item}
                        // path={path}
                        onClick={() => setActive(item.title)}
                        active={item.title === active}
                      />
                    );
                  })}
                </div>
                <div className='notif flex justify-center items-center gap-5'>
                  <span className='text-secondary text-sm'>{time}</span>
                  <IconButton aria-label='notif'>
                    <NotificationsNone />
                  </IconButton>
                </div>
              </div>
              <div className='flex'>
                <div className='content-wrapper flex-1'>
                  {subMenulearningRoute}
                </div>
                <RightBar />
              </div>
            </>
          ) : (
            <>
              <Navbar />
              <div className='flex'>
                <div className='content-wrapper flex-1'>{learningRoute}</div>
                <RightBar />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Learning;

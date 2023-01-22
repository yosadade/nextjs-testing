import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
  ICAssignment,
  ICAssignment_active,
  ICAttendance,
  ICAttendance_active,
  ICCalendar,
  ICCalendar_active,
  ICChangePassword,
  ICChangePassword_active,
  ICClass,
  ICClass_active,
  ICDashboard,
  ICDashboard_active,
  ICDataChange,
  ICDataChange_active,
  ICExam,
  ICExam_active,
  ICLiveStreaming,
  ICLiveStreaming_active,
  ICNotes,
  ICNotes_active,
  ICOverview,
  ICOverView_active,
  ICPoll,
  ICPoll_active,
  ICQuizzez,
  ICQuizzez_active
} from '../../../../../public/assets';

const subMenuLearning = [
  {
    id: 0,
    icon: ICOverview,
    iconActive: ICOverView_active,
    title: 'Learning Material',
    href: '/student/learning/syllabus/learning-material',
    path: 'learning-material'
  },
  {
    id: 1,
    icon: ICAssignment,
    iconActive: ICAssignment_active,
    title: 'Assignment',
    href: '/student/learning/syllabus/assignment',
    path: 'assignment'
  },
  {
    id: 2,
    icon: ICNotes,
    iconActive: ICNotes_active,
    title: 'Notes',
    href: '/student/learning/syllabus/notes',
    path: 'notes'
  },
  {
    id: 3,
    icon: ICQuizzez,
    iconActive: ICQuizzez_active,
    title: 'Quizzez',
    href: '/student/learning/syllabus/quizzez',
    path: 'quizzez'
  },
  {
    id: 4,
    icon: ICPoll,
    iconActive: ICPoll_active,
    title: 'Poll',
    href: '/student/learning/syllabus/poll',
    path: 'poll'
  },
  {
    id: 5,
    icon: ICExam,
    iconActive: ICExam_active,
    title: 'Forum Discussion',
    href: '/student/learning/syllabus/forum-discussion',
    path: 'forum-discussion'
  },
  {
    id: 6,
    icon: ICLiveStreaming,
    iconActive: ICLiveStreaming_active,
    title: 'Live Learning',
    href: '/student/learning/syllabus/live-learning',
    path: 'live-learning'
  }
];

const ListItemNavbarSyllabus = ({ data, active, onClick }) => {
  return (
    <Link
      onClick={onClick}
      href='/student/learning/syllabus'
      className={`flex items-center gap-2.5 p-2.5 cursor-pointer navbar-link ${
        active ? 'navbar-active' : ''
      }`}
    >
      <Image
        src={active ? data.iconActive : data.icon}
        width={28}
        height={28}
        alt='icon'
      />
      <span className='text-secondary text-sm'>{data.title}</span>
    </Link>
  );
};

export { subMenuLearning, ListItemNavbarSyllabus };

ListItemNavbarSyllabus.propTypes = {
  data: PropTypes.object,
  active: PropTypes.bool,
  onClick: PropTypes.func
};

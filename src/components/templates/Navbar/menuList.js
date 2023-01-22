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
  ICFeedback,
  ICFeedback_active,
  ICGlobalDiscussion,
  ICGlobalDiscussion_active,
  ICGlobalNotification,
  ICGlobalNotification_active,
  ICGrade,
  ICGradePerCourse,
  ICGradePerCourse_active,
  ICGrade_active,
  ICLiveStreaming,
  ICLiveStreaming_active,
  ICMyProfile,
  ICMyProfile_active,
  ICNotes,
  ICNotes_active,
  ICNoticeboard,
  ICNoticeboard_active,
  ICOverview,
  ICOverView_active,
  ICPoll,
  ICPoll_active,
  ICQuizzez,
  ICQuizzez_active,
  ICSurvey,
  ICSurvey_active,
  ICSyllabus,
  ICSyllabus_active,
  ICTuition,
  ICTuition_active
} from '../../../../public/assets';

const menuManagement = [
  {
    icon: ICDashboard,
    iconActive: ICDashboard_active,
    title: 'Dashboard',
    href: '/student/management/dashboard',
    path: 'dashboard'
  },
  {
    icon: ICClass,
    iconActive: ICClass_active,
    title: 'Class',
    href: '/student/management/class',
    path: 'class'
  },
  {
    icon: ICCalendar,
    iconActive: ICCalendar_active,
    title: 'Academic Calendar',
    href: '/student/management/academic-calendar',
    path: 'academic-calendar'
  },
  {
    icon: ICAttendance,
    iconActive: ICAttendance_active,
    title: 'Attendance',
    href: '/student/management/attendance',
    path: 'attendance'
  },
  {
    icon: ICGrade,
    iconActive: ICGrade_active,
    title: 'Grade Summary',
    href: '/student/management/grade-summary',
    path: 'grade-summary'
  },
  {
    icon: ICTuition,
    iconActive: ICTuition_active,
    title: 'Tuition fee',
    href: '/student/management/tuition-fee',
    path: 'tuition-fee'
  }
];

const menuSettings = [
  {
    icon: ICMyProfile,
    iconActive: ICMyProfile_active,
    title: 'My Profile',
    href: '/student/settings/my-profile',
    path: 'my-profile'
  },
  {
    icon: ICChangePassword,
    iconActive: ICChangePassword_active,
    title: 'Change Password',
    href: '/student/settings/change-password',
    path: 'change-password'
  },
  {
    icon: ICDataChange,
    iconActive: ICDataChange_active,
    title: 'Data Change',
    href: '/student/settings/data-change',
    path: 'data-change'
  }
];

const menuInformation = [
  {
    icon: ICGlobalNotification,
    iconActive: ICGlobalNotification_active,
    title: 'Global Noticeboard',
    href: '/student/information/global-noticeboard',
    path: 'global-noticeboard'
  },
  {
    icon: ICGlobalDiscussion,
    iconActive: ICGlobalDiscussion_active,
    title: 'Global Discussion',
    href: '/student/information/global-discussion',
    path: 'global-discussion'
  },
  {
    icon: ICSurvey,
    iconActive: ICSurvey_active,
    title: 'Survey',
    href: '/student/information/survey',
    path: 'survey'
  },
  {
    icon: ICFeedback,
    iconActive: ICFeedback_active,
    title: 'Feedback',
    href: '/student/information/feedback',
    path: 'feedback'
  }
];

const menuLearning = [
  {
    icon: ICOverview,
    iconActive: ICOverView_active,
    title: 'Overview',
    href: '/student/learning/overview',
    path: 'overview'
  },
  {
    icon: ICSyllabus,
    iconActive: ICSyllabus_active,
    title: 'Syllabus',
    href: '/student/learning/syllabus',
    path: 'syllabus'
  },
  {
    icon: ICNoticeboard,
    iconActive: ICNoticeboard_active,
    title: 'Noticeboard',
    href: '/student/learning/noticeboard',
    path: 'noticeboard'
  },
  {
    icon: ICGradePerCourse,
    iconActive: ICGradePerCourse_active,
    title: 'Grade per Course',
    href: '/student/learning/grade-per-course',
    path: 'grade-per-course'
  },
  {
    icon: ICAttendance,
    iconActive: ICAttendance_active,
    title: 'Attendance',
    href: '/student/learning/attendance',
    path: 'attendance'
  },
  {
    icon: ICExam,
    iconActive: ICExam_active,
    title: 'Exam',
    href: '/student/learning/exam',
    path: 'exam'
  }
];

const subMenuLearning = [
  {
    icon: ICOverview,
    iconActive: ICOverView_active,
    title: 'Learning Material',
    href: '/student/learning/syllabus/learning-material',
    path: 'learning-material'
  },
  {
    icon: ICAssignment,
    iconActive: ICAssignment_active,
    title: 'Assignment',
    href: '/student/learning/syllabus/assignment',
    path: 'assignment'
  },
  {
    icon: ICNotes,
    iconActive: ICNotes_active,
    title: 'Notes',
    href: '/student/learning/syllabus/notes',
    path: 'notes'
  },
  {
    icon: ICQuizzez,
    iconActive: ICQuizzez_active,
    title: 'Quizzez',
    href: '/student/learning/syllabus/quizzez',
    path: 'quizzez'
  },
  {
    icon: ICPoll,
    iconActive: ICPoll_active,
    title: 'poll',
    href: '/student/learning/syllabus/poll',
    path: 'poll'
  },
  {
    icon: ICExam,
    iconActive: ICExam_active,
    title: 'Forum Discussion',
    href: '/student/learning/syllabus/forum-discussion',
    path: 'forum-discussion'
  },
  {
    icon: ICLiveStreaming,
    iconActive: ICLiveStreaming_active,
    title: 'Live Learning',
    href: '/student/learning/syllabus/live-learning',
    path: 'live-learning'
  }
];

const ListItem = ({ data, active }) => {
  return (
    <Link
      href={data.href}
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

export {
  menuManagement,
  menuSettings,
  menuInformation,
  menuLearning,
  subMenuLearning,
  ListItem
};

ListItem.propTypes = {
  data: PropTypes.object,
  active: PropTypes.bool
};

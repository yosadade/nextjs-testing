import {
  AcademicCalendarView,
  AttendView,
  ClassView,
  Dashboard,
  GradeSummaryView,
  TuitionFeeView,
  MyProfileView,
  ChangePasswordView,
  DataChangeView,
  GlobalNoticeboardView,
  GlobalDiscussionView
} from '../modules';
import PropTypes from 'prop-types';
import SurveyView from '../modules/student/information/views/survey_view';
import FeedbackView from '../modules/student/information/views/feedback_view';
import Learning from '../modules/student/learning';
import Overview from '../modules/student/learning/views/overview';
import Syllabus from '../modules/student/learning/views/syllabus';
import Noticeboard from '../modules/student/learning/views/noticeboard';
import GradeperCourse from '../modules/student/learning/views/grade_per_course';
import Attendance from '../modules/student/learning/views/attendance';
import Exam from '../modules/student/learning/views/exam';

const managementRoutes = (path) => {
  switch (path) {
    case 'dashboard':
      return <Dashboard />;
    case 'class':
      return <ClassView />;
    case 'academic-calendar':
      return <AcademicCalendarView />;
    case 'attendance':
      return <AttendView />;
    case 'grade-summary':
      return <GradeSummaryView />;
    case 'tuition-fee':
      return <TuitionFeeView />;
    default:
      return <Dashboard />;
  }
};

const settingsRoutes = (path) => {
  switch (path) {
    case 'my-profile':
      return <MyProfileView />;
    case 'change-password':
      return <ChangePasswordView />;
    case 'data-change':
      return <DataChangeView />;
    default:
      return <MyProfileView />;
  }
};

const informationRoutes = (path) => {
  switch (path) {
    case 'global-noticeboard':
      return <GlobalNoticeboardView />;
    case 'global-discussion':
      return <GlobalDiscussionView />;
    case 'survey':
      return <SurveyView />;
    case 'feedback':
      return <FeedbackView />;
    default:
      return <GlobalNoticeboardView />;
  }
};

const learningRoutes = (path) => {
  switch (path) {
    case 'overview':
      return <Overview />;
    case 'syllabus':
      return <Syllabus />;
    case 'noticeboard':
      return <Noticeboard />;
    case 'grade-per-course':
      return <GradeperCourse />;
    case 'attendance':
      return <Attendance />;
    case 'exam':
      return <Exam />;
    default:
      return <Learning />;
  }
};

export { managementRoutes, settingsRoutes, informationRoutes, learningRoutes };
settingsRoutes.propTypes = {
  path: PropTypes.string
};
managementRoutes.propTypes = {
  path: PropTypes.string
};
informationRoutes.propTypes = {
  path: PropTypes.string
};
learningRoutes.propTypes = {
  path: PropTypes.string
};

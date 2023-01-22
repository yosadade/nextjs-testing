import { Assignment } from '@mui/icons-material';
import { Button } from '@mui/material';
import Card from '../../../../components/Card';

const GradeSummaryView = () => {
  return (
    <Card breadcumb>
      <div className='header flex justify-between items-center'>
        <h1 className={`text-title text-semibold text-2xl`}>Grade Summary</h1>
        <Button
          size='small'
          variant='outlined'
          startIcon={<Assignment />}
          color='error'
          className='py-2 px-9 rounded-full cursor-pointer'
        >
          Export to PDF
        </Button>
      </div>
      <div className='mt-8'>
        <div className='table-responsive'>
          <table className='w-full'>
            <thead>
              <tr className='bg-turquoise text-white'>
                <th className='text-base text-semibold py-3 text-left pl-5'>
                  Course
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5'>
                  Score Weight
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5'>
                  Student Grade
                </th>
                <th className='text-base text-semibold py-3 text-left pl-5'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  className='pl-5 py-3 border border-t-0 text-title text-semibold text-sm'
                  rowSpan={4}
                >
                  Mathematic
                </td>
                <td className='pl-5 py-3 text-sm text-title'>Assigment</td>
                <td className='pl-5 py-3 text-sm text-title'>100</td>
                <td className='pl-5 py-3 text-sm text-title'>pass</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Exam
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  100
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  pass
                </td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title'>Mid Exam</td>
                <td className='pl-5 py-3 text-sm text-title'>100</td>
                <td className='pl-5 py-3 text-sm text-title'>pass</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Final Exam
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  100
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  pass
                </td>
              </tr>
              <tr>
                <td
                  className='pl-5 py-3 border border-t-0 text-title text-semibold text-sm'
                  rowSpan={4}
                >
                  English
                </td>
                <td className='pl-5 py-3 text-sm text-title'>Assigment</td>
                <td className='pl-5 py-3 text-sm text-title'>100</td>
                <td className='pl-5 py-3 text-sm text-title'>pass</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Exam
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  100
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  pass
                </td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title'>Mid Exam</td>
                <td className='pl-5 py-3 text-sm text-title'>100</td>
                <td className='pl-5 py-3 text-sm text-title'>pass</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Final Exam
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  100
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  pass
                </td>
              </tr>
              <tr>
                <td
                  className='pl-5 py-3 border border-t-0 text-title text-semibold text-sm'
                  rowSpan={4}
                >
                  Science
                </td>
                <td className='pl-5 py-3 text-sm text-title'>Assigment</td>
                <td className='pl-5 py-3 text-sm text-title'>100</td>
                <td className='pl-5 py-3 text-sm text-title'>pass</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Exam
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  100
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  pass
                </td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title'>Mid Exam</td>
                <td className='pl-5 py-3 text-sm text-title'>100</td>
                <td className='pl-5 py-3 text-sm text-title'>pass</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Final Exam
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  100
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  pass
                </td>
              </tr>
              <tr>
                <td
                  className='pl-5 py-3 border border-t-0 text-title text-semibold text-sm'
                  rowSpan={4}
                >
                  Bahasa Indonesia
                </td>
                <td className='pl-5 py-3 text-sm text-title'>Assigment</td>
                <td className='pl-5 py-3 text-sm text-title'>100</td>
                <td className='pl-5 py-3 text-sm text-title'>pass</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Exam
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  100
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  pass
                </td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title'>Mid Exam</td>
                <td className='pl-5 py-3 text-sm text-title'>100</td>
                <td className='pl-5 py-3 text-sm text-title'>pass</td>
              </tr>
              <tr>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  Final Exam
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  100
                </td>
                <td className='pl-5 py-3 text-sm text-title bg-lightBlue'>
                  pass
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export { GradeSummaryView };

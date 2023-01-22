import { AccessTime } from '@mui/icons-material';

const EventAgenda = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>08.00</td>
          <td
            rowSpan={3}
            className='w-full relative'
          >
            <div className='absolute top-0 bottom-0 left-0 right-0 w-full flex flex-1 justify-start items-center bg-lightOrange gap-2.5'>
              <div className='w-2.5 bg-newOrange h-full'></div>
              <div className='flex flex-col flex-wrap gap-2.5'>
                <h3 className='text-newOrange text-semibold text-sm'>
                  Regular Class - SD 1A
                </h3>
                <div className='flex gap-2.5 justify-start items-center'>
                  <AccessTime
                    fontSize='small'
                    sx={{
                      color: '#808080'
                    }}
                  />
                  <span
                    className='text-secondary'
                    style={{
                      fontSize: '10px'
                    }}
                  >
                    2 Hours
                  </span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>09.00</td>
        </tr>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>10.00</td>
        </tr>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>11.00</td>
        </tr>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>12.00</td>
          <td
            rowSpan={3}
            className='w-full relative'
          >
            <div className='absolute top-0 bottom-0 left-0 right-0 w-full flex flex-1 justify-start items-center bg-lightOrange gap-2.5'>
              <div className='w-2.5 bg-newOrange h-full'></div>
              <div className='flex flex-col flex-wrap gap-2.5'>
                <h3 className='text-newOrange text-semibold text-sm'>
                  Regular Class - SD 1A
                </h3>
                <div className='flex gap-2.5 justify-start items-center'>
                  <AccessTime
                    fontSize='small'
                    sx={{
                      color: '#808080'
                    }}
                  />
                  <span
                    className='text-secondary'
                    style={{
                      fontSize: '10px'
                    }}
                  >
                    2 Hours
                  </span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>13.00</td>
        </tr>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>14.00</td>
        </tr>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>15.00</td>
        </tr>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>16.00</td>
        </tr>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>17.00</td>
        </tr>
        <tr>
          <td className='pb-5 text-secondary text-sm pr-6'>18.00</td>
        </tr>
      </tbody>
    </table>
  );
};
export default EventAgenda;

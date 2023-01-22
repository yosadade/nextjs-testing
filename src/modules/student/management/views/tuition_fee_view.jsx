import { ChevronLeft, ChevronRight, CloudDownload } from '@mui/icons-material';
import { FormControl, IconButton, MenuItem, Select } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { getSafe } from '../../../../../utils';
import Card from '../../../../components/Card';

const TuitionFeeView = () => {
  const [rowPage, setRowPage] = useState(10);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const rowHeader = [
    {
      label: 'issue date'
    },
    {
      label: 'due date'
    },
    {
      label: 'payment desc.'
    },
    {
      label: 'payment notes'
    },
    {
      label: 'billed Amount'
    },
    {
      label: 'disc. %'
    },
    {
      label: 'disc. Amount',
      align: 'right'
    },
    {
      label: 'to be paid',
      align: 'right'
    },
    {
      label: 'mand/opt'
    },
    {
      label: 'status',
      align: 'center'
    },
    {
      label: 'invoice',
      align: 'center'
    }
  ];
  const dataBody = useMemo(() => {
    return [
      {
        issueDate: '2022-12-01',
        dueDate: '2022-12-25',
        paymentDesc: 'Miscellaneous Fee',
        paymentNotes: 'Study tour',
        billedAmount: 'Rp 5.750.000',
        discon: '15',
        disconAmount: 'Rp. 750.000.000',
        toBePaid: 'Rp. 5.000.000.000',
        mandOpt: 'optional',
        status: 'unpaid'
      },
      {
        issueDate: '2022-12-01',
        dueDate: '2022-12-25',
        paymentDesc: 'Miscellaneous Fee',
        paymentNotes: 'Study tour',
        billedAmount: 'Rp 5.750.000',
        discon: null,
        disconAmount: null,
        toBePaid: 'Rp. 5.000.000.000',
        mandOpt: 'mandatory',
        status: 'paid'
      },
      {
        issueDate: '2022-12-01',
        dueDate: '2022-12-25',
        paymentDesc: 'Miscellaneous Fee',
        paymentNotes: 'Study tour',
        billedAmount: 'Rp 5.750.000',
        discon: null,
        disconAmount: null,
        toBePaid: 'Rp. 5.000.000.000',
        mandOpt: 'mandatory',
        status: 'paid'
      }
    ];
  }, []);

  useEffect(() => {
    if (dataBody.length) {
      setTotal(dataBody.length);
    }
  }, [dataBody]);
  return (
    <Card
      breadcumb
      headerTitle='Tuition Fee'
    >
      <div className='flex text-start gap-8 justify-start mb-7'>
        <div className='flex flex-col gap-2.5 items-start justify-between'>
          <h3 className='uppercase text-semibold text-secondary text-base'>
            total payment
          </h3>
          <h1 className='capitalize text-title text-semibold text-2xl'>
            Rp 100.000.000
          </h1>
        </div>
        <div className='flex flex-col gap-2.5 items-start justify-between'>
          <h3 className='uppercase text-semibold text-secondary text-base'>
            total paid
          </h3>
          <h1 className='capitalize text-title text-semibold text-2xl'>
            Rp 95.000.000
          </h1>
        </div>
        <div className='flex flex-col gap-2.5 items-start justify-between'>
          <h3 className='uppercase text-semibold text-secondary text-base'>
            total unpaid
          </h3>
          <h1 className='capitalize text-title text-semibold text-2xl'>
            Rp 5.000.000
          </h1>
        </div>
      </div>
      <div className='table w-full'>
        <div className='header-table flex justify-between items-center flex-wrap mb-5'>
          <div className='flex justify-start items-center gap-2'>
            <span className='text-sm text-secondary'>Showing</span>
            <FormControl size='small'>
              <Select
                className='rounded-full text-sm py-0 px-1'
                value={rowPage}
                onChange={(item) => {
                  setRowPage(item.target.value);
                }}
              >
                <MenuItem
                  value={10}
                  className='text-sm'
                >
                  10
                </MenuItem>
                <MenuItem
                  value={20}
                  className='text-sm'
                >
                  20
                </MenuItem>
                <MenuItem
                  value={50}
                  className='text-sm'
                >
                  50
                </MenuItem>
                <MenuItem
                  value={100}
                  className='text-sm'
                >
                  100
                </MenuItem>
              </Select>
            </FormControl>
            <span className='text-sm text-secondary'>Items per page</span>
          </div>
        </div>
        <div className='table-responsive'>
          <table className='w-full'>
            <thead>
              <tr className='text-white bg-turquoise'>
                {getSafe(() => rowHeader, []).map((item, idx) => {
                  return (
                    <th
                      className={`text-semibold text-xs py-4 px-4 capitalize ${
                        item?.align ? 'text-' + item.align : 'text-left'
                      }`}
                      key={idx}
                    >
                      {item.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {getSafe(() => dataBody, [])
                .slice(0, rowPage)
                .map((item, idx) => {
                  const colored = idx !== 0 && (idx + 1) % 2 === 0;
                  const last =
                    idx === rowPage - 1 || idx === dataBody.length - 1;
                  return (
                    <tr
                      key={idx}
                      className={`${colored ? 'bg-lightBlue' : ''} ${
                        last ? 'border-b' : ''
                      }`}
                    >
                      <td className='py-5 px-4 text-title text-xs'>
                        {item?.issueDate}
                      </td>
                      <td className='py-5 px-4 text-title text-xs'>
                        {item?.dueDate}
                      </td>
                      <td className='py-5 px-4 text-title text-xs'>
                        {item?.paymentDesc}
                      </td>
                      <td className='py-5 px-4 text-title text-xs'>
                        {item?.paymentNotes}
                      </td>
                      <td className='py-5 px-4 text-title text-xs'>
                        {item?.billedAmount}
                      </td>
                      <td className='py-5 px-4 text-title text-xs'>
                        {item?.discon !== null ? item?.discon + '%' : '-'}
                      </td>
                      <td className='py-5 px-4 text-title text-xs text-right'>
                        {item?.disconAmount !== null ? item?.disconAmount : '-'}
                      </td>
                      <td className='py-5 px-4 text-title text-xs text-right'>
                        {item?.toBePaid}
                      </td>
                      <td className='py-5 px-4 text-title text-xs'>
                        {item?.mandOpt}
                      </td>
                      <td
                        className={`py-5 px-4 text-semibold font-bold text-xs text-center uppercase ${
                          item?.status === 'unpaid'
                            ? 'text-red-500'
                            : 'text-turquoise'
                        }`}
                      >
                        {item?.status}
                      </td>
                      <td className='py-5 px-4 text-title text-xs text-center'>
                        {item?.status === 'paid' ? (
                          <IconButton
                            size='small'
                            color='primary'
                          >
                            <CloudDownload />
                          </IconButton>
                        ) : null}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <div className='pagination flex items-center justify-end gap-2 mt-5'>
            <IconButton
              size='small'
              color='primary'
              className='cursor-pointer'
            >
              <ChevronLeft />
            </IconButton>
            <div className='page-number'>
              <span className='text-lg text-secondary'>1</span>
            </div>
            <IconButton
              size='small'
              color='primary'
              className='cursor-pointer'
            >
              <ChevronRight />
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { TuitionFeeView };

import styled from '@emotion/styled';
import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import {
  ICGroup,
  ICGroupList,
  ICGroupList_active,
  ICGroup_active
} from '../../../../../public/assets';
import Card from '../../../../components/Card';
import CardUser from '../components/cardUser';
import DataTable from '../components/DataTable';

const ClassView = () => {
  const [group, setGroup] = useState('list');
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: 4,
      border: 0,
      '&.Mui-disabled': {
        border: 0
      },
      '&:not(:first-of-type)': {
        borderRadius: 10
      },
      '&:first-of-type': {
        borderRadius: 10
      }
    }
  }));

  const handleChangeGroup = (event, newGroup) => {
    if (newGroup !== null) {
      setGroup(newGroup);
    }
  };
  const createData = (id, name) => {
    return {
      id,
      name
    };
  };
  const headerTeacher = [
    {
      id: 'id',
      label: 'Teacher ID',
      width: 150
    },
    {
      id: 'name',
      label: 'Name'
    }
  ];
  const headerStudent = [
    {
      id: 'id',
      label: 'Student ID',
      width: 150
    },
    {
      id: 'name',
      label: 'Name'
    }
  ];
  const rowsTeacher = [createData('000012345', 'Mary Jane')];
  const rowStudent = [
    createData('2005-STE-0250', 'John Doe'),
    createData('2005-STE-0251', 'Larry Mary'),
    createData('2005-STE-0253', 'Laura Ann'),
    createData('2005-STE-0254', 'Annabel key'),
    createData('2005-STE-0255', 'Smith Marshello')
  ];
  return (
    <Card
      style={{
        height: 800,
        maxHeight: 936
      }}
      breadcumb
      headerTitle='X MIPA 5'
    >
      <div
        className='tools flex justify-between items-center gap-20 sticky top-0 bg-white z-50'
        style={{
          paddingBottom: '30px'
        }}
      >
        <TextField
          placeholder='Search Here'
          size='small'
          fullWidth
        />
        <div className='tools-item flex justify-center items-center'>
          <StyledToggleButtonGroup
            value={group}
            exclusive
            onChange={handleChangeGroup}
            color='primary'
            aria-label='select group'
          >
            <ToggleButton
              className={`border-none rounded-lg ${
                group === 'group' ? 'active-button-group' : ''
              }`}
              value='group'
              aria-label='group'
            >
              <Image
                src={group === 'group' ? ICGroup_active : ICGroup}
                width={24}
                height={24}
                alt='icon group'
              />
            </ToggleButton>
            <ToggleButton
              className={`border-none rounded-lg ${
                group === 'list' ? 'active-button-group' : ''
              }`}
              value='list'
              aria-label='list'
            >
              <Image
                src={group === 'list' ? ICGroupList_active : ICGroupList}
                width={24}
                height={24}
                alt='icon group list'
              />
            </ToggleButton>
          </StyledToggleButtonGroup>
        </div>
      </div>

      {group === 'group' ? (
        <div className='content flex flex-col gap-7 flex-1'>
          <div className='advisor-teacher'>
            <h3 className='uppercase text-semibold text-sm text-secondary mb-5'>
              advisor teacher
            </h3>
            <CardUser />
          </div>
          <div className='mt-0.5'>
            <h3 className='uppercase text-semibold text-sm text-secondary mb-5'>
              student
            </h3>
            <div className='flex gap-7 flex-wrap'>
              {Array.from(Array(10).keys()).map((item, idx) => {
                return (
                  <CardUser
                    key={idx}
                    data={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className='content flex flex-col gap-7 flex-1'>
          <div className='advisor-teacher'>
            <h3 className='uppercase text-semibold text-sm text-secondary mb-5'>
              advisor teacher
            </h3>
            <DataTable
              dataBody={rowsTeacher}
              dataHeader={headerTeacher}
            />
          </div>
          <div className='mt-0.5'>
            <h3 className='uppercase text-semibold text-sm text-secondary mb-5'>
              student
            </h3>
            <div className='flex gap-7 flex-wrap'>
              <DataTable
                dataBody={rowStudent}
                dataHeader={headerStudent}
              />
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export { ClassView };

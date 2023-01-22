import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import {
  FormControl,
  IconButton,
  MenuItem,
  Select,
  TextField
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICBack } from '../../../../../public/assets';
import Card from '../../../../components/Card';
import { showLearningMaterial } from '../../../../features/syllabus/learningMaterialSlice';
import ContentSyllabus from '../components/ContentSyllabus';

const Syllabus = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(10);
  const { isVisible } = useSelector((store) => store.learningMaterial);

  const handleNext = () => {
    dispatch(showLearningMaterial({ isVisible: true }));
  };

  return (
    <>
      <ContentSyllabus
        onBack={() => {}}
        onNext={handleNext}
      />
    </>
  );
};

export default Syllabus;

import Image from 'next/image';
import { ICBack } from '../../../../../public/assets';
import Card from '../../../../components/Card';
import CardNotice from '../components/CardNotice';

const Noticeboard = () => {
  return (
    <Card
      className='w-full h-full'
      breadcumb
    >
      <div
        className='flex flex-row items-start'
        // style={{
        //   alignItems: 'center'
        // }}
      >
        <button
          className='cursor-pointer text-[14px] font-semibold text-[#0F1B40]'
          onClick={() => {}}
        >
          <Image
            alt='add'
            width={43}
            height={43}
            src={ICBack}
            className='mr-[20px]'
          />
        </button>
        <div>
          <h1 className={`text-title text-semibold text-2xl`}>Noticeboard</h1>
          <p className={`font-normal text-lg text-[#3F3F3F]`}>
            Matematika ; X MIPA 5
          </p>
        </div>
      </div>
      <div className='mt-8'>
        <CardNotice
          title='Pelaksanaan ujian Pertama'
          date='24 October 2022, 10:00:01'
          subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'
        />
        <CardNotice
          attachment
          title='Pelaksanaan ujian Pertama'
          date='24 October 2022, 10:00:01'
          subTitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis'
        />
      </div>
    </Card>
  );
};

export default Noticeboard;

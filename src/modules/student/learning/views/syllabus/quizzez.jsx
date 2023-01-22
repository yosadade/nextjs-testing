import Image from 'next/image';
import Card from '../../../../../components/Card';
import { ICBack } from '../../../../../../public/assets';

const Quizzez = () => {
  return (
    <Card
      className='w-full h-full'
      breadcumb
    >
      <div
        className='flex flex-row '
        style={{
          alignItems: 'center'
        }}
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
        <h1 className={`text-title text-semibold text-2xl`}>Quizzez</h1>
      </div>
      <div className='flex flex-1 justify-center align-middle my-[200px]'>
        <h1 className='text-semibold text-3xl text-[#1695C9]'>3rd Party</h1>
      </div>
    </Card>
  );
};

export default Quizzez;

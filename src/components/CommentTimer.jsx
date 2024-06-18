/* eslint-disable react/prop-types */
import useTimer from '../hooks/useTimer';
import { formatSeconds } from '../utils/time-format';
import TimerControls from './TimerControls';

const CommentTimer = ({ presentation, onSave }) => {
  const {
    seconds,
    isActive,
    onToggle,
    onReset
  } = useTimer(onSave);

  return (
    <div className='flex p-2 items-center justify-between pl-12 bg-gray-800 py-0 mb-2'>
      <div>
        <h2 className='text-lg'>
          <small>{presentation.name}</small>
          {' - Comentários'}
        </h2>
      </div>
      <div className='flex gap-4 p-1 items-end'>
        <div className='flex flex-col items-center gap-1'>
          <h1 className={`text-xl w-full text-center font-bold rounded p-1 ${seconds > presentation?.recommendedTime ? 'bg-red-600' : 'bg-green-600'}`}>
            {formatSeconds(seconds)}
          </h1>
          <div className='flex gap-1'>
            <TimerControls 
              isActive={isActive} 
              onReset={onReset} 
              onToggle={onToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentTimer;


/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
import ControlButton from './ControlButton';
import useTimer from '../hooks/useTimer';
import { convertSecondsToMinutes, formatSeconds } from '../utils/time-format';

const PresentationTimer = ({ presentation, onSave }) => {
  const {
    seconds,
    isActive,
    onToggle,
    onReset
  } = useTimer(onSave);

  return (
    <div className='flex p-2 items-center justify-between bg-gray-900 mt-2'>
      <div>
      <h2 className='text-xl'>{presentation.name}</h2>
        {!!presentation?.recommendedTime && (
          <span className='text-gray-200'>
            {convertSecondsToMinutes(presentation.recommendedTime)} min
          </span>
        )}
      </div>
      <div className='flex gap-4 p-1 items-end'>
        <div className='flex flex-col items-center gap-1'>
          <h1 className={`text-xl w-full text-center font-bold rounded p-1 ${seconds > presentation?.recommendedTime ? 'bg-red-600' : 'bg-green-600'}`}>
            {formatSeconds(seconds)}
          </h1>
          <div className='flex gap-1'>
            <ControlButton onClick={onToggle}>
              {isActive ? '❚❚ Stop' : '▶ Play'}
            </ControlButton>

            <ControlButton onClick={onReset}>
              ↪ Reset
            </ControlButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationTimer;

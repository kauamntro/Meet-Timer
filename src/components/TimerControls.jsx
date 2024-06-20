/* eslint-disable react/prop-types */
import { PlayIcon, PauseIcon, StopIcon } from '@heroicons/react/24/outline';
import ControlButton from './ControlButton';

const TimerControls = ({ isActive, onToggle, onReset }) => {
  return (
    <>
      <ControlButton onClick={onToggle}>
        {isActive ? (
          <div className='flex items-center'>
            <PauseIcon className='size-6' /> Pause
          </div> 
        ) : (
          <div className='flex items-center'>
            <PlayIcon className='size-6' /> Play
          </div>
        )}
      </ControlButton>

      <ControlButton onClick={onReset}>
        <div className='flex items-center'>
          <StopIcon className='size-6' /> Reset
        </div>
      </ControlButton>
    </>
  );
}

export default TimerControls;

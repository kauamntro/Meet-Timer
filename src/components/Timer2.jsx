/* eslint-disable react/prop-types */
/* eslint-disable no-constant-condition */
import { useState, useEffect } from 'react';
import ControlButton from './ControlButton';

const Timer2 = ({ presentation, onSave }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (!isActive && seconds > 0) {
      onSave(formatTime(seconds));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, seconds]);

  const onToggle = () => {
    setIsActive(!isActive);
  };

  const onReset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  return (
    <div className='flex p-2 items-center justify-between py-4'>
      <div>
        <h2 className='text-xl'>{presentation.name}</h2>
        <span className='text-gray-200'>
          {presentation?.recommendedTime}
        </span>
      </div>
      <div className='flex gap-4 p-1 items-end'>
        {presentation.hasComments && (
          <div className='flex flex-col items-center gap-1'>
            <h1 className={`text-base font-bold rounded p-1 ${false ? 'bg-amber-600' : ''}`}>
              {formatTime(123)}
            </h1>
            <div className='flex gap-1'>
              <button onClick={() => null} className='border border-amber-500 p-2 rounded bg-black bg-opacity-50 hover:bg-white hover:text-black transition active:bg-green-500 text-xs'>▶</button>
              <button onClick={() => null} className='border border-amber-500 p-2 rounded bg-black bg-opacity-50 hover:bg-white hover:text-black transition active:bg-red-500 text-xs'>❚❚</button>
              <button onClick={() => null} className='border border-amber-500 p-2 rounded bg-black bg-opacity-50 hover:bg-white hover:text-black transition active:bg-yellow-500 text-xs'>↪</button>
            </div>
          </div>
        )}
        <div className='flex flex-col items-center gap-1'>
          <h1 className={`text-xl font-bold rounded p-1 ${false ? 'bg-amber-600' : ''}`}>
            {formatTime(seconds)}
          </h1>
          <div className='flex gap-1'>
            <ControlButton onClick={onToggle}>
              {isActive ? '❚❚' : '▶ Play'}
            </ControlButton>

            {(isActive || !!seconds) && (
              <ControlButton onClick={onReset}>
                ↪
              </ControlButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer2;

import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ min, title, isComment, timerSeconds, setTimerSeconds, timerMinutes, setTimerMinutes, setTimerRunning, timerRunning, timerStartTimeRef,commentSeconds, setCommentSeconds, commentMinutes, setCommentMinutes, commentRunning, setCommentRunning, commentStartTimeRef }) => {

  useEffect(() => {
    let timer;
    if (timerRunning) {
      timerStartTimeRef.current = Date.now() - (timerMinutes * 60 + timerSeconds) * 1000;
      timer = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - timerStartTimeRef.current) / 1000);
        setTimerMinutes(Math.floor(elapsedTime / 60));
        setTimerSeconds(elapsedTime % 60);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerRunning, timerMinutes, timerSeconds, setTimerMinutes, setTimerSeconds, timerStartTimeRef]);

  useEffect(() => {
    let commentTimer;
    if (commentRunning) {
      commentStartTimeRef.current = Date.now() - (commentMinutes * 60 + commentSeconds) * 1000;
      commentTimer = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - commentStartTimeRef.current) / 1000);
        setCommentMinutes(Math.floor(elapsedTime / 60));
        setCommentSeconds(elapsedTime % 60);
      }, 1000);
    }
    return () => clearInterval(commentTimer);
  }, [commentRunning, commentMinutes, commentSeconds, setCommentMinutes, setCommentSeconds, commentStartTimeRef]);

  const startTimer = () => setTimerRunning(true);
  const stopTimer = () => setTimerRunning(false);
  const resetTimer = () => {
    setTimerRunning(false);
    setTimerSeconds(0);
    setTimerMinutes(0);
  };

  const startCommentTimer = () => setCommentRunning(true);
  const stopCommentTimer = () => setCommentRunning(false);
  const resetCommentTimer = () => {
    setCommentRunning(false);
    setCommentSeconds(0);
    setCommentMinutes(0);
  };

  const formatTime = (minutes, seconds) => {
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className='flex p-2 items-center justify-between py-4'>
      <div>
        <h2 className='text-xl'>{title}</h2>
        <span className='text-gray-200'>{min !== "" ? `${min} minutos` : ""}</span>
      </div>
      <div className='flex gap-4 p-1 items-end'>
        {isComment && (
          <div className='flex flex-col items-center gap-1'>
            <h1 className={`text-base font-bold rounded p-1 ${commentRunning ? 'bg-amber-600' : ''}`}>
              {formatTime(commentMinutes, commentSeconds)}
            </h1>
            <div className='flex gap-1'>
              <button onClick={startCommentTimer} className='border border-amber-500 p-2 rounded bg-black bg-opacity-50 hover:bg-white hover:text-black transition active:bg-green-500 text-xs'>▶</button>
              <button onClick={stopCommentTimer} className='border border-amber-500 p-2 rounded bg-black bg-opacity-50 hover:bg-white hover:text-black transition active:bg-red-500 text-xs'>❚❚</button>
              <button onClick={resetCommentTimer} className='border border-amber-500 p-2 rounded bg-black bg-opacity-50 hover:bg-white hover:text-black transition active:bg-yellow-500 text-xs'>↪</button>
            </div>
          </div>
        )}
        <div className='flex flex-col items-center gap-1'>
          <h1 className={`text-xl font-bold rounded p-1 ${timerRunning ? 'bg-amber-600' : ''}`}>
            {formatTime(timerMinutes, timerSeconds)}
          </h1>
          <div className='flex gap-1'>
            <button onClick={startTimer} className='border border-indigo-100 p-2 rounded bg-black bg-opacity-50 hover:bg-white hover:text-black transition active:bg-green-500 text-sm'>▶</button>
            <button onClick={stopTimer} className='border border-indigo-100 p-2 rounded bg-black bg-opacity-50 hover:bg-white hover:text-black transition active:bg-red-500 text-sm'>❚❚</button>
            <button onClick={resetTimer} className='border border-indigo-100 p-2 rounded bg-black bg-opacity-50 hover:bg-white hover:text-black transition active:bg-yellow-500 text-sm'>↪</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

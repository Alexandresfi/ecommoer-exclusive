'use client';

import { useEffect, useState } from 'react';
import { getNextTwoDays } from '@/utils/getTimeCounterTime';
import { ComponentTime } from './Timer';

export function OfferCounter() {
  const [timer, setTimer] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  function StartTIme() {
    const [nextDay, dayAfterNext] = getNextTwoDays();

    const countdownDate = new Date(dayAfterNext).getTime();

    setInterval(() => {
      const today = new Date().getTime();
      const distance = countdownDate - today;

      const days = String(Math.floor(distance / (1000 * 60 * 60 * 24)));
      const hours = String(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      );
      const seconds = String(Math.floor((distance % (1000 * 60)) / 1000));

      setTimer({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);
  }

  useEffect(() => {
    StartTIme();
  }, [timer.seconds]);

  return (
    <div className="flex items-end gap-4 h-[51px]">
      <ComponentTime title="Dias" value={timer.days} />
      <span className="text-orange-secondary font-bold text-2xl pb-px">:</span>
      <ComponentTime title="Horas" value={timer.hours} />
      <span className="text-orange-secondary font-bold text-2xl pb-px">:</span>
      <ComponentTime title="Minutos" value={timer.minutes} />
      <span className="text-orange-secondary font-bold text-2xl pb-px blinkingTime">
        :
      </span>
      <ComponentTime title="segundos" value={timer.seconds} />
    </div>
  );
}

import React, { use, useEffect, useState } from "react";
const CountDown = ({duration}) => {
  const [timer, setTimer] = useState({
    days: "",
    hours: "",
    mins: "",
    secs: "",
  });

  const time = duration;
  let totalSeconds = time * 24 * 60 * 60;

  function countdown() {
    let days = Math.floor(totalSeconds / (24 * 60 * 60));
    let hour = Math.floor((totalSeconds % 86400) / (60 * 60));
    let min = Math.floor(((totalSeconds % 86400) % (60 * 60)) / 60);
    let sec = ((totalSeconds % 86400) % (60 * 60)) % 60;
    sec = sec < 10 ? "0" + sec : sec;
    min = min < 10 ? "0" + min : min;
    hour = hour < 10 ? "0" + hour : hour;
    days = days < 10 ? "0" + days : days;
    setTimer({ days: days, hours: hour, mins: min, secs: sec });
    if (totalSeconds !== 0) {
      totalSeconds--;
    }
  }
  useEffect(() => {
    setInterval(countdown, 1000);
  }, [totalSeconds]);

  return (
    <div className="md:text-4xl flex gap-2 sm:gap-6 font-medium" >
        <p className="self-end">Flash Sales</p>
      <div className="flex items-center gap-2 sm:gap-4 ">
        <div className="">
          <p className="hidden sm:block text-[12px] md:-mb-3 ">Days</p>
          <p className="">{timer.days} <span className="text-red-600">:</span></p>
        </div>
        <div className="">
          <p className=" hidden sm:block text-[12px] md:-mb-3 ">hours</p>
          <p className="">{timer.hours} <span className="text-red-600">:</span></p>
        </div>
        <div className="">
          <p className=" hidden sm:block text-[12px] md:-mb-3">Minutes</p>
          <p className="">{timer.mins} <span className="text-red-600">:</span></p>
        </div>
        <div className="">
          <p className=" hidden sm:block text-[12px] md:-mb-3 ">Seconds</p>
          <p className="">{timer.secs}</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;

import React from 'react';

const Profilecardprogressbar = ({ percentage = 90 }) => {
  return (
    <div className="mx-auto w-[150px] h-[150px] rounded-full border-[20px] border-white relative flex items-center justify-center shadow-[0px_0px_32px_-7px_#b8b8b8] bg-gradient-to-tr from-blue-600 to-pink-600">
      <span className="text-2xl text-white">
        <b className="text-[50px] leading-[109px]">{percentage}</b>%
      </span>
    </div>
  );
};

export default Profilecardprogressbar;
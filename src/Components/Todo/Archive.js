import React from 'react';
import Warning from './Warning';

const Archive = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-[#AF1945] to-[#C3336F]  flex items-center justify-between gap-5 p-5 rounded-lg">
            <p className="text-white text-2xl ">Archive</p>
            <p className="text-white text-2xl ">0</p>
          </div>
          <Warning/>
        </div>
    );
};

export default Archive;
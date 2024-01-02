import React from 'react';
import Warning from './Warning';

const Pending = () => {
    return (
        <div>
            <div className= "bg-gradient-to-r from-[#E87E41] to-[#FFA46C]  flex items-center justify-between gap-5 p-5 rounded-lg">
            <p className="text-white text-2xl ">Pending</p>
            <p className="text-white text-2xl ">0</p>
          </div>
          <Warning/>
        </div>
    );
};

export default Pending;
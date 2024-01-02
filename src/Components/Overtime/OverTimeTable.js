import React from 'react';

const OverTimeTable = () => {
    return (
        <div className='my-12'>
           
         <div className="m-4">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>Work requirement</th>
                    <th>From (Time)</th>
                    <th>To (Time)</th>
                    <th>Total (Time)</th>
                    <th>Remarks </th>
                  </tr>
                
                <tr>
                    <th>06/06/22</th>
                    <th>-</th>
                    <th>-</th>
                    <th>-</th>
                    <th>-</th>
                    <th>-</th>
                   
                </tr>
               
                </tbody>
              </table>
            </div>
          </div> 
        </div>
    );
};

export default OverTimeTable;
import React from 'react';

const OvertimeTableS = (props) => {
    const {workRequirements, fromTime, toTime, date} =props.singledata
    console.log(workRequirements)
    return (
       <>                 
                  <tr>
                      <td>{date}</td>
                      <td>{workRequirements}</td>
                      <td>{fromTime}</td>
                      <td>{toTime}</td>
                      <td>-</td>
                      <td>-</td>
                     
                  </tr>
                
       </>
    );
};

export default OvertimeTableS;
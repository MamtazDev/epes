import React from 'react';
import member1 from "../../assets/team/member1.png";
import phone from "../../assets/logo/phone.png";
import email from "../../assets/logo/email.png";
import linkedin from "../../assets/logo/linkedin.png";

const OurTeam = () => {
    const members = [
        {
            picture:member1,
            name:"Md. Shohidur",
            email:"shohidurrahman@gmail.com",
            joiningDate:"Joined 2 years ago"
        },
        {
            picture:member1,
            name:"Md. Shohidur",
            email:"shohidurrahman@gmail.com",
            joiningDate:"Joined 2 years ago"
        },
        {
            picture:member1,
            name:"Md. Shohidur",
            email:"shohidurrahman@gmail.com",
            joiningDate:"Joined 2 years ago"
        },
  
    ]
    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Your team members</h2>
            <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 py-12'>
                {
                    members.map((member,index)=> 
                        <div key={index} className="flex flex-wrap items-center gap-6 bg-white rounded p-5 shadow">
                        <div className="avatar">
                          <div className="w-[129px] rounded-full">
                            <img src={member.picture} alt="member" />
                          </div>
                        </div>
                        <div>
                          <h5 className="font-bold text-xl">{member.name}</h5>
                          <p className='break-words '>{member.email}</p>
                          <p className="text-[13px] text-[#A4A4A4]">{member.joiningDate}</p>
                          <div className='flex gap-3 py-2 cursor-pointer'>
                            <img src={phone} alt=""/>
                            <img src={email} alt=""/>
                            <img src={linkedin} alt=""/>
                          </div>
                        </div>
                      </div>
                    )
                }
            </div>

           
        </div>
    );
};

export default OurTeam;
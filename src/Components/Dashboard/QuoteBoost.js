import React, { useEffect, useState } from 'react';
import next from '../../assets/logo/next.png';
import query from '../../assets/logo/query.png';

const QuoteBoost = () => {
    const [quote,setQuote] = useState([]);
    const getQuote = ()=>{
        fetch("https://type.fit/api/quotes")
        .then(res => res.json())
        .then(data =>{
            let randomData = Math.floor(Math.random() * data.length);
            setQuote(data[randomData])
        })
    }
    useEffect(()=>{
       getQuote()
    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[60px] py-16'>
            <div className=' bg-white  shadow rounded-md '>
                <div className='bg-[#323657] rounded-t-md px-[40px] flex items-center justify-between text-white'>
                    <p className='table_title  py-[15px]'>A Quote to Boost You Up!</p>
                    <button onClick={getQuote} className='btn btn-sm normal-case bg-white text-[#323657] text-[16px] hover:bg-white'><img className='mr-3' src={next} alt=""/> Next</button>
                </div>
                <div className='p-3 lg:px-20 lg:py-10'>
                    <p className='quote'>{quote.text}</p>
                    <p className='text-[#A4A4A4] text-end text-sm mt-6'>- {quote.author}</p>
                </div>
            </div>
            <div className=' bg-white  shadow rounded-md '>
                <div className='bg-[#323657] rounded-t-md py-[15px] px-[40px] flex items-center  text-white'>
                    <p className='table_title flex items-center gap-3'><img src={query} alt=""/> Do you know?</p>
                    
                </div>
                <div className='p-3 lg:px-20 lg:py-10'>
                <button className='btn btn-xs bg-[#FF6357] normal-case border-0 mb-2'>Category: Geography</button>
                    <p className='quote'>“The Pacific Ocean” is the name of the largest ocean in the world.</p>
                </div>
            </div>
        </div>
    );
};

export default QuoteBoost;
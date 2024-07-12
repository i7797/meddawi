import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

function ServiceCardFinal({ data }) {
    return (
        <div className='Servicecard h-[15%] bg-[#F7F7F7] lg:bg-[#323868] border-2  flex flex-col items-center justify-center w-full lg:border-0 lg:w-[25%] mr-8 lg:h-1/2 mb-2 rounded-2xl shadow-xl' key={data.id}>
            <div className="image border-gray border-2 self-center rounded-2xl h-[45%] mt-4 bg-white flex justify-center lg:h-3/4  w-[90%] lg:rounded-none lg:mt-0 lg:border-0 lg:w-full">
                <img src={data.image} className='w-1/2 h-3/4 mt-3 lg:mt-0' />
            </div>
            <h1 className='lg:hidden text-[25px] mb-[10px]'>{data.title}</h1>
            <div className="circleOut bg-[#5d649c]  lg:bg-[#CA5050] w-[25%] self-center h-[110px] rounded-full lg:mt-[-40px] mt-0 opacity-85">
                <Link to={`/service/${data.id}/${data.title}`}>
                    <div className="circleIn bg-[#252d6b] lg:bg-[#db3434] w-3/4 h-3/4 rounded-full ml-[10px] mt-[10px]  opacity-100">
                        <ArrowForwardIcon sx={{ color: 'white', width: 60, height: 60 }} />
                    </div>
                </Link>
                
            </div>
            <div className="text text-center p-3">
                <h2 className='title text-white'>{data.title}</h2>
                <p className='discription text-white hidden lg:block'>{data.text}</p>
            </div>
        </div>
    );
}

export default ServiceCardFinal;

import React from 'react';

function ServiceCardFinal({ data }) {
    return (
        <div className='service-card h-[15%] bg-[#F7F7F7] lg:bg-[#323868] border-2 flex flex-col items-center justify-center w-full lg:border-0 lg:w-[25%] mr-8 lg:h-1/2 mb-2 rounded-2xl shadow-xl' key={data.id}>
            <div className="image border-gray border-2 self-center rounded-2xl h-[45%] mt-4 bg-white flex justify-center lg:h-3/4 w-[90%] lg:rounded-none lg:mt-0 lg:border-0 lg:w-full">
                <img src={data.image} className='w-1/2 h-3/4 mt-3 lg:mt-0' alt={data.title} />
            </div>
            <h1 className='lg:hidden text-[25px] mb-[10px]'>{data.title}</h1>
            <div className="text text-center p-3">
                <h2 className='title text-white'>{data.title}</h2>
                <p className='description text-white hidden lg:block'>{data.text}</p>
            </div>
        </div>
    );
}

export default ServiceCardFinal;

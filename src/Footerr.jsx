import {useTranslation} from "react-i18next"

import React from 'react';

const Footerr = () => {
  const { i18n,t}=useTranslation();

  return (
    <footer id='footerSection'  className='bg-gradient-to-r from-[#3d436e] to-[#040a37] text-white py-10 mt-0'> 
<div className='container  mx-auto  grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-10 px-5   '>
<div>
<h2 className='text-3xl font-serif'> Meddawi</h2>
<p className="mt-2">{t('Healthy Future')}      </p>
<p className='mt-4 text-sm'>  © Copyright 2024.</p>

<div className=" flex space-x-4 mt-3 ">
  <button onClick={()=>i18n.changeLanguage('ar')}
    className=" bg-gradient-to-r from-pink-400 to-[#CA5050] text-white rounded-xl px-4 py-2">
      {t('Arabic')}
  </button>
    
  <button onClick={()=>i18n.changeLanguage('en')}
    className=" bg-gradient-to-r from-pink-400 to-[#CA5050] text-white rounded-xl px-4 py-2">
      {t('English')}
  </button>
</div>
</div>
<div>
    <h2 className='text-xl font-bold '> {t('Quick Links')}:      </h2>
    <ul className='mt-2 space-y-2'> 
    <li> <a href='#home' > {t('Home')} </a></li>
   <li>  <a  href='#service'>  {t('Services')}</a></li>
    <li><a  href='#team'> {t('Team')}</a></li>
    </ul>
  
</div>

<div>
<p  className='text-xl font-bold mb-4'>   {t('Contact Us')} 
</p>
<a className="bg-gradient-to-r from-pink-400 to-[#CA5050] text-white rounded-full px-6 py-3 mb-4 inline-flex items-center justify-center shadow-lg">  
      <i className='fas fa-phone-alt mr-2'>  {t('Phone')} : 077077777777  </i>
    </a>      

<div className=' flex space-x-4 '>
    <a href='https://facebook.com'><i className="fab fa-twitter text-2xl">Facebook</i>    </a>
    <a href='https://x.com/'><i className="fab fa-twitter text-2xl">X</i>
    </a>
    <a href='https://linkedin.com'> <i className="fab fa-linkedin-in text-2xl">linkedin</i>
    </a>
</div>
</div>


</div>


</footer>

 
  );
};

export default Footerr;


import React from 'react';

const Footerr = () => {
  return (
    <footer id='footerSection'  className='bg-gradient-to-r from-[#7378a0] to-[#323868] text-white py-10 mt-10'> 
<div className='container  mx-auto  grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-10 px-5   '>
<div>
<h2 className='text-3xl font-bold'> Meddawi</h2>
<p className="mt-2">اعمل اليوم من أجل غد أكثر صحة</p>
<p className='mt-4 text-sm'>  © Copyright 2024.</p>
</div>
<div>
    <h2 className='text-xl font-bold '>:  روابط سريعة   </h2>
    <ul className='mt-2 space-y-2'> 
    <li> <a href='#home' > الصفحة الرئيسيه</a></li>
    <li> <a  href='#about'>  عننا</a></li>
   <li>  <a  href='#service'>  الخدمات</a></li>
    <li><a  href='#tea'> الفريق</a></li>
    </ul>
  
</div>

<div>
<p  className='text-xl font-bold mb-4'>يمكننك التواصل معنا هنا 
</p>
<a className="bg-gradient-to-r from-orange-400 to-[#CA5050] text-white rounded-full px-6 py-3 mb-4 inline-flex items-center justify-center shadow-lg">  
      <i className='fas fa-phone-alt mr-2'> 077077777777 : الهاتف </i>
    </a>      

<div className=' flex space-x-4'>
    <a href='https://facebook.com'><i className="fab fa-twitter text-2xl">Facebook</i>    </a>
    <a href='https://twitter.com'><i className="fab fa-twitter text-2xl">twitter</i>
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

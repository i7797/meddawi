import React from 'react'
import '../assets/css/Style.css'
import '../assets/css/MediaQuery.css'
import home from '../assets/images/homeSvg.svg'
import EmergencyBotton from '../components/bottons/EmergencyBotton'
import HomeCards from '../components/cards/HomeCards'
import NavBar from '../components/common/NavBar'
import { useTranslation } from 'react-i18next';
import Translate from '../Translate'

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className='Home flex flex-col lg:bg-none lg:w-[90%] lg:h-screen  w-screen h-screen lg:mt-36 '>
      {/* <div className="navbar hidden ">
      <NavBar />
      </div>
     <div className="content flex flex-col-reverse h-[45%] w-[85%]">
     <div className='ImgBtn'>
      <p className='HomeText invisible'>أحنا هنا حتى نراعيك بعناية ومحبة</p>
      <EmergencyBotton />
      </div>
     <img src={home} alt='homeimage' className='HomeImage'/>
     <HomeCards  />
     </div>
      */}
      <div className="navbar hidden lg:inline-flex justify-center items-center">
        <NavBar/>
      </div>
      <div className="content lg:w-full lg:h-[80%] ">
      <img src={home} alt='homeimage' className='HomeImage lg:h-full lg:w-full'/>
     <div className="TextBtn flex flex-col justify-center items-center text-center">
     <p className='HomeText mr-5 mb-5 invisible lg:visible'>     {t('homeText', 'أحنا هنا حتى نراعيك بعناية ومحبة')}
  </p>

     
     <EmergencyBotton />
     </div>
      <div className="cards flex flex-col  w-3/4 justify-center items-center lg:hidden">
      <HomeCards  />
      <Translate />
      </div>
      </div>

    </div>
  )
}


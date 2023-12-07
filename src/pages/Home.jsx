import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import './Home.css'

import fish from '../assets/Fish_NH_Icon.png'
import bugs from '../assets/Bug_NH_Icon.png'
import sea from '../assets/Sea_Creature_NH_Icon.png'

import dayBanner from '../assets/banner_day.webp'
import dayBannerM from '../assets/banner_day_m.webp'
import nightBanner from '../assets/banner_night.webp'
import nightBannerM from '../assets/banner_night_m.webp'

const Home = () => {
  const now = new Date().getHours()
  const to = 6 <= now && now < 18 ? '/fish/Guppy' : '/fish/Barreleye'
  const title = 6 <= now && now < 18 ? 'link to Guppy' : 'link to Barreleye'
  const [src, setSrc] = useState(dayBanner)

  useEffect(() => {
    getSrc()

    window.addEventListener('resize', getSrc)
    return () => window.removeEventListener('resize', getSrc)
  }, [])

  function getSrc() {
    if (6 <= now && now < 18) {
      // day
      if (window.innerWidth > 1000) {
        setSrc(dayBanner)
      } else {
        setSrc(dayBannerM)
      }
    } else {
      // night
      if (window.innerWidth > 1000) {
        setSrc(nightBanner)
      } else {
        setSrc(nightBannerM)
      }
    }
  }

  return (
    <section className='home'>
      <Carousel />
      <div className='horiBanner'>
        <Link to={to} title={title}></Link>
        <img src={src} alt="" />
      </div>
      <section className='miniButtons'>
        <div className='miniButton'>
          <Link to='/fish' title='link to category:fish' className='miniLink' />
          <img src={fish} alt="" />
          <p>물고기</p>
        </div>
        <div className='miniButton'>
          <Link to='/bugs' title='link to category:bugs' className='miniLink' />
          <img src={bugs} alt="" />
          <p>곤충</p>
        </div>
        <div className='miniButton'>
          <Link to='/sea' title='link to category:sea creatures' className='miniLink' />
          <img src={sea} alt="" />
          <p>바다 생물</p>
        </div>
      </section>
    </section>
  );
};

export default Home;
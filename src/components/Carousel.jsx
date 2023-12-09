import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Carousel.css'
import Image from './Image'

import car1 from '../assets/car1.webp'
import car2 from '../assets/car2.webp'
import car3 from '../assets/car3.webp'
import car4 from '../assets/car4.webp'

const Carousel = ({  }) => {
  const [imageList, setImageList] = useState([])
  const urlList = [
    car1,
    car2,
    car3,
    car4
  ]
  const hrefList = [
    '/fish/King salmon',
    '/bugs/emperor butterfly',
    '/sea/lobster',
    '/',
  ]
  const titleList = [
    'link to king salmon',
    'link to emperor butterfly',
    'link to lobster',
    'blank link'
  ]
  const [current, setCurrent] = useState(0)
  const [transition, setTransition] = useState('smooth')
  const [buttonSwitch, setButtonSwitch] = useState(false)
  const bannerWidth = 820
  const viewRef = useRef(null)
  const divRef = useRef(null)

  useEffect(() => {
    getImage()
    setCurrent(0)
    transform(0)
  }, [])

  useEffect(() => {
    window.addEventListener('resize', transform)
    return () => window.removeEventListener('resize', transform)
  }, [current])

  useEffect(() => {
    if (transition === 'smooth') return

    setTimeout(() => {
      setTransition('smooth')
    }, 50);
  }, [transition])

  function getImage() {
    const newList = []
    const len = urlList.length
    for (let i = -2; i < len+2; i++) {
      let idx = i < len ? i : i - len
      newList.push(
      <li key={i}>
        <Link to={hrefList.at(idx)} title={titleList.at(idx)} className="bannerLink" />
        <Image src={urlList.at(idx)}/>
      </li>)
    }
    setImageList(newList)
  }

  function transform(num) {
    const curr = typeof num === 'number' ? num : current
    // 화면 너비 (스크롤바 제외)
    const w = divRef.current.clientWidth
    
    // 기본 offset
    const raw = w > 820 ? 
    bannerWidth*2.5 - w/2 : Math.min(w, bannerWidth*2.5 - w/2)
    
    const newDx = w > 1000 ? bannerWidth*curr + raw : 
    w > bannerWidth ? bannerWidth*curr + raw : raw*(curr+2)
    
    viewRef.current.style.transform = `translate(-${newDx}px)`

    if (curr < 0) {  // curr 마지막으로 가기
      setTimeout(() => {
        let dx = w > 1000 ? bannerWidth*(urlList.length-1) + raw : 
          w > bannerWidth ? bannerWidth*(urlList.length-1) + raw : w*(urlList.length+1)
        move(dx)
      }, 200);

    } else if (curr > urlList.length-1) { // curr 0으로 가기
      setTimeout(() => {
        let dx = w > 1000 ? raw : 
          w > bannerWidth ? raw : w*2
        move(dx)
      }, 200);
    }
  }

  function move(dx) {
    console.log(dx)
    setTransition('')
    viewRef.current.style.transform = `translate(-${dx}px)`

    setTimeout(() => {
      setTransition('smooth')
    }, 100)
  }

  function prev() {
    setButtonSwitch(true)

    setTimeout(() => {
      setButtonSwitch(false)
    }, 300);

    transform(current-1)
    setCurrent(current !== 0 ? current-1 : urlList.length-1)
    
  }

  function next() {
    setButtonSwitch(true)

    setTimeout(() => {
      setButtonSwitch(false)
    }, 300);

    transform(current+1)
    setCurrent(current !== urlList.length-1 ? current+1 : 0)
          
  }

  return (
    <div className="carousel" ref={divRef}>
      <ul className={"viewport " + transition} ref={viewRef}>
        {imageList}
      </ul>
      <button className="prev" onClick={prev} disabled={buttonSwitch} aria-label='previous card'><span className="material material-arrow-back"></span></button>
      <button className="next" onClick={next} disabled={buttonSwitch} aria-label='next card'><span className="material material-arrow-forward"></span></button>
      <span className="count"><b>{current + 1}</b> / {urlList.length}</span>
    </div>
  )
}

export default Carousel
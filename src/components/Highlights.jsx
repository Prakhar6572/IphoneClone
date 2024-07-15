import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import {watchImg,rightImg} from '../utils'
import VideoCarousel from './VideoCarousel'

const Highlights = () => {
  useGSAP(()=>{
    gsap.to('#title',{opacity:1,y:0})
    gsap.to('.link',{opacity:1,y:0,duration:1,stagger:0.25})
  },[])
  return (
    <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 md:flex w-full items-end justify-between'>
          <h1 id="title" className='section-heading'>Get the highlights.</h1>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>Watch the Film <img src={watchImg} alt='img' className='ml-2'/></p>
          </div>
          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>Watch the Event <img src={rightImg} alt='rimg' className='ml-2'/></p>
          </div>
        </div>
      </div>
      <VideoCarousel/>
    </section>
  )
}

export default Highlights

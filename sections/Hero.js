import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"
import { firstLetter } from "@/components/utils/data"
import { companyName } from "@/components/utils/data"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title={companyName} caption={firstLetter} className='logobg' />
          <h1 className='hero-title'>WE CREATE UNFORGETTABLE EVENTS</h1>

          <div className='sub-heading'>
            <TitleSm title='WEDDINGS' /> <span>.</span>
            <TitleSm title='BIRTHDAYS' /> <span>.</span>
            <TitleSm title='CORPORATE EVENTS'/>
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The Only Event Planner You will Ever Need' />
            <p>From intimate gatherings to grand celebrations, 
              we bring your vision to life with seamless planning, elegant design, and unforgettable experiences..</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      {/* <Brand /> */}

      <div className='text-center'>
        <Title title='Latest news & articles'/>
      </div>
      <BlogCard />
    </>
  )
}

export default Hero

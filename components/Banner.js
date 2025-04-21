import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>

      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We’re Excited to Plan Your Next Event!' /> <br />
            <TitleLogo title='Let’s turn your special moments into unforgettable experiences!' />
          </div>
          <div>
            <button className='button-primary'>Contact us</button>
          </div>
        </div>
      </section>
    </>
  )
}


export default Banner

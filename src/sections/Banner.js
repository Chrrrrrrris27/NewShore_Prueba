import React from 'react'
import { ButtonBanner } from '../components/Buttons/ButtonBanner'

export const Banner = () => {
  return (
    <section className='banner'>
      <div className='banner__info'>
        <h2 className='banner__title'>Visit Canada with prices from $800</h2>
        <p className='banner__body'>Prepare your bags and forget your worries <br/> to start enjoying your holidays in this fantastic country.</p>
        <ButtonBanner
          text={'BUY NOW'}
        />
      </div>
    </section>
  )
}

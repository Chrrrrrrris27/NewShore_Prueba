import React from 'react'
import { ButtonBanner } from '../components/Buttons/ButtonBanner'

export const Banner = () => {
  return (
    <section>
      <h2>Visit Canada with prices from $800</h2>
      <p>Prepare your bags and forget your worries to start enjoying your holidays in this fantastic country.</p>
      <ButtonBanner
        text={'BUY NOW'}
      />
    </section>
  )
}

import React, { useEffect, useState } from 'react'

export const DestinationCard = ({title, body, price, bgImage, setDestination, destination}) => {

  const [cardActive, setCardActive] = useState('')

  const handleActiveCard = () => {
    setDestination(title)
  }

  useEffect(() => {
    if (destination === title) {
      setCardActive(`offers__body__card--${title.split(' ').join('-')}`)
    }
    else {
      setCardActive('')
    }
  
  }, [destination, setCardActive, title])
  

  return (
    <article
      className={`offers__body__card ${cardActive}`}
      onClick={handleActiveCard}
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <div className='offers__body__card--filter'>
        <h4>{title}</h4>
        <p>{body} <a href='/'>more</a></p>
        <span>Price ${price}</span>
      </div>
    </article>
  )
}

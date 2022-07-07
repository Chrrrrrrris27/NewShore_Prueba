import React from 'react'

export const DestinationCard = ({title, body, price, bgImage, setDestination}) => {
  return (
    <article 
      image={bgImage}
      onClick={()=>setDestination(title)}
    >
      <h4>{title}</h4>
      <p>{body} <a href='/'>more</a></p>
      <span>`Price ${price}`</span>
    </article>
  )
}

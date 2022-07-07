import React, { useState } from 'react'
import Moscow from '../assets/images/moscow.jpg'
import Honduras from '../assets/images/honduras.jpg'
import PuertoRico from '../assets/images/puerto-rico.jpg'
import { DestinationCard } from '../components/Cards/DestinationCard'
import { DestinationMenu } from '../components/Navigation/DestinationMenu'

const destinations = [
  {
    title: 'Trip to Moscow',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nulla mauris.',
    price: '600,86',
    bgImage: Moscow
  },
  {
    title: 'Trip to Puerto Rico',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nulla mauris.',
    price: '600,86',
    bgImage: PuertoRico
  },
  {
    title: 'Trip to Honduras',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in nulla mauris.',
    price: '600,86',
    bgImage: Honduras
  },
]
export const Offers = () => {

  const [destination, setDestination] = useState('')
  return (
    <section>
      <div>
        <h3>Offers</h3>
        <hr/>
      </div>
      <div>
        <div>
          <section>
            {
              destinations.map((destination) => (
                <DestinationCard
                  key={destination.title}
                  {...destination}
                  setDestination={setDestination}
                />
              ))
            }
          </section>
          <section>
            <h4>{destination}</h4>
            <hr/>
            <h5>Chosen destination</h5>
          </section>
        </div>
        <DestinationMenu/>
      </div>
    </section>
  )
}

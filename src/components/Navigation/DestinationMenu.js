import React from 'react'
const itemsMenu = [
  {
    name: 'Check-in',
    link: '/'
  },
  {
    name: 'Manage My Booking',
    link: '/'
  },
  {
    name: 'Search',
    link: '/'
  },
  {
    name: 'Destinations',
    link: '/'
  },
  {
    name: 'Members',
    link: '/'
  },
]
export const DestinationMenu = () => {
  return (
    <aside>
      <h5>Menu</h5>
      <ul>
        {
          itemsMenu.map(({name, link}, index) => (
            <li key={name}>
              <a href={link}>{name}</a>
              {
                index < itemsMenu.length - 1 &&
                <hr/>
              }
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

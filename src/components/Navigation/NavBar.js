import React from 'react'

export const NavBar = () => {
  return (
    <header className='header'>
      <div className='navbar'>
        <section className='navbar__brand'>
          <h1><a href="/">AIRLINE</a></h1>
        </section>
        <section className='navbar__items'>
          <div>
            <select name='languages' defaulValue={'en'} className=''>
              <option value={'en'}>en</option>
              <option value={'ru'}>RU</option>
              <option value={'de'}>DE</option>
              <option value={'fr'}>FR</option>
            </select>
          </div>
          <div>
            <a href='/' className='navbar__items--link-active'>Home</a>
            <a href='/'>About</a>
            <a href='/'>Destination</a>
            <a href='/'>Contact</a>
          </div>
        </section>
      </div>
    </header>
  )
}

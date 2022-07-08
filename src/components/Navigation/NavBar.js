import React from 'react'
import Arrow from '../../assets/icons/arrow-down.svg';

export const NavBar = () => {
  return (
    <header className='header'>
      <div className='navbar'>
        <section className='navbar__brand'>
          <h1><a href="/">AIRLINE</a></h1>
        </section>
        <section className='navbar__items'>
          <div className='navbar__items__lang'>
            <select name='languages' defaulvalue={'en'} className=''>
              <option value={'en'}>en</option>
              <option value={'ru'}>RU</option>
              <option value={'de'}>DE</option>
              <option value={'fr'}>FR</option>
            </select>
            <span>en</span>
            <img src={Arrow} alt='arrow'/>
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

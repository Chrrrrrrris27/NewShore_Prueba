import React, { useEffect, useState } from 'react'
import Arrow from '../../assets/icons/arrow-down.svg';
import { useToggle } from '../../hooks/useToggle';
import { BurgerButton } from '../Buttons/BurgerButton';
import { LanguagesOptions } from '../Languages/LanguagesOptions';

export const NavBar = () => {

  const [sidebarMobile, setSidebarMobile] = useState(false)
  const [viewLang, setViewLang] = useState(false)

  const [langToggle, handleLangToggle] = useToggle()

  useEffect(() => {
    setViewLang(langToggle)
  
  }, [langToggle, setViewLang])
  
  const handleActiveLang = () => {
    handleLangToggle()
  }

  return (
    <header className='header'>
      <div className={`navbar ${sidebarMobile && "navbar--active"}`}>
        <section className='navbar__brand'>
          <h1><a href="/">AIRLINE</a></h1>
        </section>
        <BurgerButton
          setSidebarMobile={setSidebarMobile}
        />
        <section className={`navbar__items ${sidebarMobile && "navbar__items--active"}`}>
          <div className='navbar__items__lang'>
            <select name='languages' defaulvalue={'en'} className=''>
              <option value={'en'}>en</option>
              <option value={'ru'}>RU</option>
              <option value={'de'}>DE</option>
              <option value={'fr'}>FR</option>
            </select>
            <span onClick={handleActiveLang}>en</span>
            <img src={Arrow} alt='arrow'/>
            <LanguagesOptions
              viewLang={viewLang}
            />
          </div>
          <div className='navbar__items__links'>
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

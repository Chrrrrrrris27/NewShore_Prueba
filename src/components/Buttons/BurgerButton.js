import React, { useEffect } from 'react';
import { useToggle } from '../../hooks/useToggle.js'

export const BurgerButton = ({setSidebarMobile}) => {
  
  const [sidebar_toggle, handletoggle_sidebar] = useToggle();
  
  useEffect(() => {
    
    setSidebarMobile(sidebar_toggle)
    
  }, [sidebar_toggle, setSidebarMobile])
  
  
  const handleToggleBurger = () => {
    handletoggle_sidebar()
  }

  return (
    <div className="burger__button" onClick={handleToggleBurger}>
      <hr className={`burger__button__top  ${sidebar_toggle && 'burger__button__top--active'}`}/>
      <hr className={`burger__button__center ${sidebar_toggle && 'burger__button__center--active'}`}/>
      <hr className={`burger__button__bottom ${sidebar_toggle && 'burger__button__bottom--active'}`}/>
    </div>
  )
}

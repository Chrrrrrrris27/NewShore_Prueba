import React from 'react'

export const NavBar = () => {
  return (
    <header>
      <section>
        <h1><a href="/">AIRLINE</a></h1>
      </section>
      <section>
        <div>
          en
        </div>
        <div>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Destination</a>
          <a href='/'>Contact</a>
        </div>
      </section>
    </header>
  )
}

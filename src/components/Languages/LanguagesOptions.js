import React from 'react'

export const LanguagesOptions = ({viewLang}) => {
  return (
    <ul className={`lang__options ${viewLang && "lang__options--active"}`}>
      <li><a href='/'>RU - Russian</a></li>
      <li><a href='/'>DE - German</a></li>
      <li><a href='/'>FR - French</a></li>
    </ul>
  )
}

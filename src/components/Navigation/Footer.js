import React from 'react'
import FacebookIcon from '../../assets/icons/facebook.svg';
import InstagramIcon from '../../assets/icons/instagram.svg';
import TwitterIcon from '../../assets/icons/twitter.svg';
const footerInfo = [
  {
    title: {
      name: 'Explore',
      link: '/'
    },
    body: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Destination',
        link: '/'
      },
      {
        name: 'About',
        link: '/'
      },
    ]
  },
  {
    title: {
      name: 'Information',
      link: '/'
    },
    body: [
      {
        name: 'More Search',
        link: '/'
      },
      {
        name: 'Blog',
        link: '/'
      },
      {
        name: 'Testimionals',
        link: '/'
      },
    ]
  },
  {
    title: {
      name: 'Services',
      link: '/'
    },
    body: [
      {
        name: 'Manage My Bookings',
        link: '/'
      },
      {
        name: 'Checkin',
        link: '/'
      },
      {
        name: 'Hotel',
        link: '/'
      },
      {
        name: 'Cars',
        link: '/'
      },
    ]
  },
]
export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <h3 className='footer__title'>Follow us</h3>
        <div className='footer__social'>
          <a href='/'><img className='footer__social__logo' src={FacebookIcon} alt="facebook"/></a>
          <a href='/'><img className='footer__social__logo' src={InstagramIcon} alt="instagram"/></a>
          <a href='/'><img className='footer__social__logo' src={TwitterIcon} alt="twitter"/></a>
        </div>
      </section>
      <section className="footer__info">
        <div className="footer_info--align-variant">
          <h4 className='footer__info__title'><a href='/'>About us</a></h4>
          <p className='footer__info__text'>We want to help passengers to reach their destinations</p>
        </div>
        {
          footerInfo.map(({title, body}) => (
            <div key={title.name}>
              <h4 className='footer__info__title'><a href={title.link}>{title.name}</a></h4>
              <ul>
                {
                  body.map(item => (
                    <li key={item.name}>
                      <a href={item.link}>{item.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </section>
    </footer>
  )
}

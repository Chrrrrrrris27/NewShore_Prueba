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
    <footer>
      <section>
        <h3>Follow us</h3>
        <div>
          <img src={FacebookIcon} alt="facebook"/>
          <img src={InstagramIcon} alt="instagram"/>
          <img src={TwitterIcon} alt="twitter"/>
        </div>
      </section>
      <section>
        <div>
          <h4><a href='/'>About us</a></h4>
          <p>We want to help passengers to reach their destinations</p>
        </div>
        {
          footerInfo.map(({title, body}) => (
            <div key={title.name}>
              <h4><a href={title.link}>{title.name}</a></h4>
              <div>
                {
                  body.map(item => (
                    <>
                      <a href={item.link}>{item.name}</a>
                    </>
                  ))
                }
              </div>
            </div>
          ))
        }
      </section>
    </footer>
  )
}

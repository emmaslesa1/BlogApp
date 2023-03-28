import React from 'react'
import classes from './header.module.css'

export const Header = () => {
  return (
    <header>
      <div className={classes.banner}>
          <div className={classes.bannerTitle}>
          <h3>This is Blog App</h3>
            <p>You can everything write in blog and share with others.</p>
          </div>
      </div>
    </header>
  )
}

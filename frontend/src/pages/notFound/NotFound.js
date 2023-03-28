import React from 'react'
import { Link } from 'react-router-dom'
import classes from './notFound.module.css'

export const NotFound = () => {
  return (
    <div className={classes.notFound}>
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to='/'>Back to the homepage...</Link>
    </div>
  )
}

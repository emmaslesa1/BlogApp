import React from 'react'
import classes from './footer.module.css'
import {BsTwitter, BsInstagram, BsPinterest, BsFacebook} from "react-icons/bs";


export const Footer = () => {
  return (
    <footer>
    <div className={classes.socialLinks}>
      <a href = "/#"><i><BsFacebook /></i></a>
      <a href = "/#"><i><BsTwitter /></i></a>
      <a href = "/#"><i><BsInstagram /></i></a>
      <a href = "/#"><i><BsPinterest /></i></a>
    </div>
    <span>Blog App</span>
  </footer>
  )
}

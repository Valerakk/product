import React from 'react'
import classes from './Image.css'
import Image from "./image1.jpg"


const ImageR = props => (
   
   <div className={classes.Image}>
      <img src={Image} width='150px' alt={" "}/>
    </div>
)


export default ImageR
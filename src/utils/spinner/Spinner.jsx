import React from 'react'
import css from './spinner.module.css'


//https://stackabuse.com/how-to-create-a-loading-animation-in-react-from-scratch/

const Spinner = () => {
  return (
    <div className={css.loaderContainer}>
    <div className={css.spinner}></div>
    </div>
  )
}

export default Spinner
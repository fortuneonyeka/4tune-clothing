import React from 'react'
import Category from "../category-item/Category-item"

import './directory.styles.scss'


const Directory = ({categories}) => {
  
  return (
    <div className="directory-container">
    {categories.map(({ title, imageUrl,id }) => (
      <Category key={id} title={title} imageUrl={imageUrl} />
    ))}
  </div>
  )
}

export default Directory



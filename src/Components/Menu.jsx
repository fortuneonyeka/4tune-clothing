import React from 'react'
import section from "../Data/Directory"
import "./menu.styles.scss"

const Menu = () => {
  return (
    <div className="categories-container">
      {section.map(({title,imageUrl, id}) => {
        return(
          <div key={id} className="category-container">
          <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} />
          <div className="category-body-container">
           <h2> {title}</h2>
           <p>Shop Now</p>
          </div>
        </div>
        )
      })}
     
    </div>
  )
}

export default Menu
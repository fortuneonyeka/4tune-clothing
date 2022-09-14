import React from 'react'
import Directory from "../../Components/directory/Directory";
import categories from "../../Data/categories-data";


const Home = () => {
  return (
    <div>
    
      <Directory  categories={categories}/>
    </div>
  )
}

export default Home
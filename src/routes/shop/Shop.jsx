

import React, { Fragment } from 'react'
import { Helmet } from "react-helmet-async"

const Shop = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Shop</title>
        <meta name="description" content="shop our latest designers clothings now."/>
        <link rel="canonical" href="/shop" />
      </Helmet>
      <div>
        <h3>I am the shop</h3>
        </div>
    </Fragment>
  )
}

export default Shop
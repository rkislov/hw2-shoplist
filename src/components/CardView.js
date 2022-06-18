import React from 'react'
// import PropTypes from 'prop-types'
import ShopCard from './ShopCard'
// import ProductModel from '../models/ProductModel';

function CardView({ products }) {
    const style = {
        display: "grid", 
        'grid-template-columns': "auto auto auto auto",
        'column-gap': '15px',
        'row-gap': '15px',
        'justify-content': 'center'
};
  return (
    <div style={style}>
        {products.map(o => <ShopCard key={o.name} product={o} />)}
    </div>
  )
}

// CardView.propTypes = {
//     products: PropTypes.instanceOf(ProductModel).isRequired
// }

export default CardView

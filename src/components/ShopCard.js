import React from 'react'
import PropTypes from 'prop-types'

function ShopCard(props) {
 const {name,color, price, img } = props.product;
  return (
    <div className='card w-75 bg-light'>
        <div className='card-body'>
            <div className='card-title text-center'>
            {name}
            </div>
        </div>
        <div className='mb-2 text-muted text-center' >{color}</div>
        <img src={img} alt=""></img>
        <div className="card-body">
        <span className='text-danger'>{price} $</span> 
        <button className='btn btn-outline-danger rounded-pill float-end'>Add to cart</button>
  </div>
    </div>
  )
}

ShopCard.propTypes = {}

export default ShopCard

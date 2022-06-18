import React from 'react'
import PropTypes from 'prop-types'

function ShopItem(props) {
    const {name,color, price, img } = props.product
  return (
        <tr className='table-light' >
            <td>
                <img src={img} alt={name} style={{width: '100px', height: '100px'}}/>
            </td>
            <td>
                <h3>{name}</h3>
                
            </td>
            <td className='text-muted '>
                {color}
            </td>
            <td className='text-danger'>
                {price} $
            </td>
            <td>
                <button className='btn btn-outline-danger rounded-pill float-end'>Add to cart</button>
            </td>
        </tr>
  )
}

ShopItem.propTypes = {}

export default ShopItem

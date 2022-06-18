import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView({ products }) {
    
  return (
    <div>
        <table className='table-light bg-light' style={{width: '100%', 'vertical-align': 'middle'}}>
            <tbody>
                {products.map(o => <ShopItem key={o.name} product={o} />)}
            </tbody>
        </table>
    </div>
  )
}

ListView.propTypes = {}

export default ListView

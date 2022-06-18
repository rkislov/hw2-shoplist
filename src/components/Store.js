import React, {useState} from 'react'
import PropTypes from 'prop-types'
import IconSwitch from './IconSwitch';
import ProductModel from '../models/ProductModel';
import CardView from './CardView';
import ListView from './ListView';


function Store(props) {
    const [products,setProducts] = useState ([ new ProductModel(
        "Nike Metcon 2",
        "130",
        "red",
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    ), 
    new ProductModel(
        "Nike Metcon 3",
        "130",
        "green",
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    ), 
    new ProductModel(
        "Nike Metcon 4",
        "130",
        "blue",
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    ),
    new ProductModel (
        "Nike Metcon 5",
        "130",
        "black",
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    ),
    new ProductModel (
        "Nike free run",
        "170",
        "black",
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    ), 
    new ProductModel (
        "Nike Metcon 6",
        "150",
        "green",
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    )]);

    // const [view_list, setView_list] = useState(true);
    // const [view_modal, setView_modal] = useState(false);
    // handleClick(){
        
    // }
    const [icon, setIcon ] = useState("view_list")
    const handleOnSwitch=() => {
       if (icon == "view_list") {
           setIcon("view_module");
       } else {
           setIcon("view_list");
       }
    };
  return (
    <div className='container'>
        <IconSwitch icon={icon} onSwitch={handleOnSwitch}/>
        {icon == "view_list" 
        ? <CardView products={products}/>
        : <ListView products={products}/>
    }
         
    </div>
  )
}

Store.propTypes = {
    product: PropTypes.instanceOf(ProductModel).isRequired
}

export default Store

import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import CheckProduct from './CheckProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue()
    return(
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt=""
                />

            
                    <div className="checkout__title">
                    <h4> Hey {!user ? 'Guest' : user.email}</h4>
                    <h2>Your shopping basket</h2>
                    
                        {basket.map(item => (
                            <CheckProduct 
                            // key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            image={item.image}
                            />
                        ))}
                        
                   
                </div>
               
               
            </div>
                <div className="checkout__right">
                     <Subtotal />
                </div>
            
        </div>
    )
}

export default Checkout;
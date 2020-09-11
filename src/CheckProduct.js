import React from 'react';
import './CheckProduct.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue }  from './StateProvider';
import { auth } from "./firebase";
import FlipMove from 'react-flip-move';
function CheckProduct({ id, image, title, price, rating, hideButton }) {
    const [{basket, user}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the items from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>
        <FlipMove  enterAnimation="elevator" leaveAnimation="elevator"   typeName="ul">
        <li>
        <img className='checkoutProduct__image' src={image} />
        
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>{price}</strong>
                </p>
                    <div className="checkoutProduct__rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                                <p><StarIcon key={i} className="star_rating"/></p>
                            ))}
                    </div>
                    {!hideButton && (
                        <button onClick={removeFromBasket}>Remove from Basket</button>
                    )}
               
          
            </div>
            </li>
            </FlipMove>
        </div>
    )
}

export default CheckProduct;
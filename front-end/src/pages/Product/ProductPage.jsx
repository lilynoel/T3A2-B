import { useState, useEffect } from 'react';
import { getProductById } from '../../services/product-services';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContextProvider';
import { createOrder } from '../../services/order-service';

export default function ProductPage(props) {
  const [quantity, setQuantity] = useState(1);
  const { product } = props;
  const { userDetails } = useContext(UserContext);
  const { username } = userDetails;
  const navigate = useNavigate();

  const onDecrementButtonClick = () => {
    if (quantity < 2) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const onIncrementButtonClick = () => {
    setQuantity(quantity + 1);
  };

  const onButtonClick = () => {
    createOrder({ product_id: product.id, quantity: quantity }).then(() => navigate('/orders'))
  }; 

  return (
    <>
      {
        <div>
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
          <img src={product.url} alt={product.name} />
          {username && (
            <>
              <p>Quantity: {quantity}</p>
              <button onClick={onDecrementButtonClick}>-</button>
              <button onClick={onIncrementButtonClick}>+</button>
              <button onClick={onButtonClick}
              >Create Order</button>
            </>
          )}
        </div>
      }
    </>
  );
}
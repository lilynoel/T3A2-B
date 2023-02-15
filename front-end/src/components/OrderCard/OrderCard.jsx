import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContextProvider';
import { updateOrderById } from '../../services/order-service';
import styles from './OrderCard.module.scss';

function OrderCard(props) {
  const { userDetails } = useContext(UserContext);
  const { role } = userDetails;
  const { order } = props;
  const { quantity, status, user, product } = order;
  const [updatingStatus, setUpdatingStatus] = useState(status);
  const navigate = useNavigate();

  const onSelectChange = (event) => {
    setUpdatingStatus(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    updateOrderById(order.id, { status: updatingStatus }).then(
      document.location.reload()
    );
  };
  return (
    <div className={styles.card}>
      <h2>Product - {product.name}</h2>
      <h3>Quantity - {quantity}</h3>
      <p>
        Ordered by - {user.username}:{user.email}
      </p>
      <p>Status: {status}</p>
      {role === 'admin' && (
        <form onSubmit={onFormSubmit}>
          <select onChange={onSelectChange}>
            <option>Pending</option>
            <option>Ready to collect</option>
            <option>Collected</option>
          </select>
          <button type='submit'>Update Order</button>
        </form>
      )}
    </div>
  );
}

export default OrderCard;
import { useEffect, useState } from 'react';
import { getOrders } from '../../services/order-service';
import OrderCard from '../OrderCard/OrderCard';

function OrderList() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders()
      .then(setOrders)
      .then(() => console.log(orders));
  }, []);
  return (
    <>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </>
  );
}

export default OrderList;
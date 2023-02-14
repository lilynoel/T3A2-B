import { useNavigate } from 'react-router-dom';
import style from './ProductCard.module.scss';

export default function ProductCard(props) {
  const { name, url, price, id } = props.product;
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate(`/products/${id}`);
  };
    
    return (
        <div className={style.card}>
            <img src={url} alt={name} className={style.image} />
            <h2 className={style.name}>{name}</h2>
            <h3 className={style.price}>{price}</h3>
            <button onClick={onButtonClick}> See More </button>
        </div>
    );
}
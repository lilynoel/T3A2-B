import style from './ProductCard.module.scss';

export default function ProductCard(props) {
    const { name, url, price } = props.product;
    return (
        <div className={style.card}>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <img src={url} alt={name} />
            <button> Order </button>
        </div>
    )
}
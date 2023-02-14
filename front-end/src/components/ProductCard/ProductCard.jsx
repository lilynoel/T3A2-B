import style from './ProductCard.module.scss';

export default function ProductCard(props) {
    const { name, url, price } = props.product;
    return (
        <div className={style.card}>
            <img src={url} alt={name} className={style.image} />
            <h2 className={style.name}>{name}</h2>
            <h3 className={style.price}>{price}</h3>
            <button> Order </button>
        </div>
    )
}
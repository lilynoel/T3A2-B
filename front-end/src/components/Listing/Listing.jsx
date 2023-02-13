import styles from './Listing.module.scss'

function Listing(props) {
    const { data } = props;
    console.log(data);
    return (
        <ul className={styles.main_heading}>
            {data.map((element, index) => (
            <li key={index}>{element}</li>
            ))}
        </ul>
    );
}

export default Listing;
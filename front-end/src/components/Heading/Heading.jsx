import styles from './Heading.module.scss';

function Heading(props) {

    const { content, name } = props;
    return <h1 className={styles.main_heading}>{content}</h1>;
}

export default Heading;
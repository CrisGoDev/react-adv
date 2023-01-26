import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export const ProductoTitle = ({ title = '' }) => {
    const { product } = useContext(ProductContext);

    let titleToShow = '';

    if (title) {
        titleToShow = title
    } else {
        titleToShow = product.title
    }
    return (
        <span className={styles.productDescription}>
            {title ? title : product.title}
        </span>
    );
}
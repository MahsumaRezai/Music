import { Fragment } from "react";
import classes from './Product.module.css';
import ProductOne from "./ProduectOne";


const Product = (props) => {
    return (
        <Fragment>
            <div className={classes.product}>
                    <ProductOne />

            </div>
        </Fragment>
    )
}
export default Product;
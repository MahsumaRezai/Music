import { Fragment } from "react";
import classes from './Product.module.css';
import ProductOne from "./ProduectOne";
import ProductTwo from "./ProductTow";
import ProductThree from './ProductThree'


const Product = (props) => {
    return (
        <Fragment>
            <div className={classes.product}>
                <ProductOne />
                <ProductTwo />
                <ProductThree />
                <button onClick={props.onshow}>See More</button>

            </div>
        </Fragment>
    )
}
export default Product;
import { Fragment } from "react";
import img1 from '../image/img4.jpg';
import img2 from '../image/img5.jpg';
import img3 from '../image/img6.jpg';

import classes from './Product.module.css';


const ProductThree = (props) => {
    return (
        <Fragment>
            <div className={classes.carts}>
                <div className={classes.cart}>
                    <img src={img1} alt="" />
                    <p>What is your favorite Artist</p>
                    <span>Do you listen Music with code</span>
                </div>
                <div className={classes.cart}>
                    <img src={img2} alt="" />
                    <p>What is your favorite Artist</p>
                    <span>Do you listen Music with code</span>

                </div>
                <div className={classes.cart}>
                    <img src={img3} alt="" />
                    <p>What is your favorite Artist</p>
                    <span>Do you listen Music with code</span>

                </div>

            </div>


        </Fragment>
    )
}
export default ProductThree
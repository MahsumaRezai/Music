import { Fragment } from "react";
import classes from './Head.module.css';

const Head = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>

                <div className={classes.cart}>
                    <h1>Welcome to Music Shop</h1>
                    <p>Hey Do you want to listen good music ? </p>
                    <p>Let go.....</p>
                </div>


            </div>
        </Fragment>
    )

}
export default Head;
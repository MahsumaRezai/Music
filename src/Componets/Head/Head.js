import { Fragment } from "react";
import classes from './Head.module.css';
import { Link } from 'react-router-dom'

const Head = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <div>
                    <ul className={classes.list}>
                        <li><Link to='/Lists' className={classes.link}>Lists</Link></li>
                        <li><Link to='/Lists' className={classes.link}>Contact Us</Link></li>

                    </ul>
                </div>

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
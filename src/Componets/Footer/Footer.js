import { Fragment } from "react";
import classes from './Footer.module.css';
import img from '../image/profile.jpg'

const Footer = (props) => {
    return (
        <Fragment>
            <div className={classes.footer}>
                <div className={classes.contact}>
                    <h1>Contact With Me</h1>
                    <img src={img} alt="" className={classes.img} />
                    <p>@MahsumaReazi</p>
                    <p>mahsuma.rezai8@gmail.com</p>
                </div>


            </div>
        </Fragment>
    )
}
export default Footer;
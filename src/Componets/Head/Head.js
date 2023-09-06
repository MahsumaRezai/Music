import { Fragment, useState } from "react";
import classes from './Head.module.css';
import List from "./List";
import ErroModal from "../UIList/ErrorModal";

const Head = (props) => {
    const [show, setShow] = useState(false);


    const ShowCart = () => {
        setShow(true)
    }
    const close = () => {
       setShow(false)
}
    return (
        <Fragment>
            <div className={classes.content}>
                <div>
                    <List onshow={ShowCart} />
                </div>
                <div className={classes.cart}>
                    <h1>Welcome to Music Shop</h1>
                    <p>Hey Do you want to listen good music ? </p>
                    <p>Let go.....</p>
                </div>
                {show && <ErroModal onconfirm={close} />}


            </div>
        </Fragment>
    )

}
export default Head;
import { Fragment, useState } from "react";
import classes from './Head.module.css';
import List from "./List";
import ErroModal from "../UIList/ErrorModal";
import Lists from "./Lists";
import ErroModals from '../UIMusic/ErrorModal'

const Head = (props) => {
    const [show, setShow] = useState(false);
    const [showMucis, setshowMucis] = useState(false);

    const ShowCart = () => {
        setShow(true)
    }
    const close = () => {
        setShow(false)
    }
    const showMucises = () => {
        setshowMucis(true)
    }
    const hide = () => {
        setshowMucis(false)
    }


    return (
        <Fragment>
            <div className={classes.content}>
                <div>
                    <List onshow={ShowCart} />
                    <Lists onsee={showMucises} />
                </div>
                <div className={classes.cart}>
                    <h1>Welcome to Music Shop</h1>
                    <p>Hey Do you want to listen good music ? </p>
                    <p>Let go.....</p>
                </div>
                {show && <ErroModal onconfirm={close} />}
                {showMucis && <ErroModals onconfirm={hide} />}


            </div>
        </Fragment>
    )

}
export default Head;
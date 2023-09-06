
import ReactDom from 'react-dom';
import Card from './Card';
import classes from './ErrorModal.module.css';
import { Fragment } from 'react';
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onconfirm} />
}
const Modaloerlay = (props) => {
    return (
        <Card className={classes.modal}>
            <form>
                <h2>
                    Add Your Information
                </h2>
                <input placeholder='Name' />
                <input placeholder='Email' />
                <input placeholder='Phone Number' />
                <input placeholder='Adress' />
                <button>send</button>


            </form>
        </Card>
    )
}
const ErroModal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onconfirm={props.onconfirm} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modaloerlay title={props.title} massage={props.massage} onconfirm={props.onconfirm} />,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErroModal;
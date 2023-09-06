
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
            <div>
                <h1 className={classes.title}>Welcome everyone </h1>
                <p className={classes.text}>Lorem ipsum dolor sit amet,<br></br> consectetur adipisicing elit.<br></br>
                    Neque doloremque esse quisquam.<br></br> Error nostrum mollitia quis,<br></br>
                    vel nesciunt non fugiat beatae exercitationem <br></br>
                    nisi vitae eius quae perferendis nobis. Laboriosam, quis.</p>
            </div>
        </Card>
    )
}
const ErroModal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onconfirm={props.onconfirm} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modaloerlay />,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErroModal;
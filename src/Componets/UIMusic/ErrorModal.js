
import ReactDom from 'react-dom';
import Card from './Card';
import classes from './ErrorModal.module.css';
import { Fragment } from 'react';
import img from '../image/img6.jpg';
import img1 from '../image/img9.jpg';

import audio from '../image/listen.mp3'
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onconfirm} />
}
const Modaloerlay = (props) => {
    return (
        <Fragment>
            <Card className={classes.modal}>
                <div className={classes.section}>
                    <div className={classes.asset}>
                        <img src={img} alt="" className={classes.img} />
                        <p>Alireza-Talischi: this Music is very interstaning</p>

                    </div>
                    <div>
                        <audio controls className={classes.listen}>
                            <source src={audio} type='' />
                            Your browser does not support the video tag.
                          </audio>
                    </div>

                </div>
                <div className={classes.section}>
                    <div className={classes.asset}>
                        <img src={img1} alt="" className={classes.img} />
                        <p>Sina Dkhsiada: this Music is very interstaning</p>

                    </div>
                    <div>
                        <audio controls className={classes.listen}>
                            <source src={audio} type='' />
                            Your browser does not support the video tag.
                          </audio>
                    </div>

                </div>
            </Card>
        </Fragment>
    )
}
const ErroModals = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onconfirm={props.onconfirm} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modaloerlay title={props.title} massage={props.massage} onconfirm={props.onconfirm} />,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ErroModals;
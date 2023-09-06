import { Fragment } from "react";
import classes from './Head.module.css';

const Lists = (props) => {
    return (
        <Fragment>
            <div className={classes.list}>
                <h1 onClick={props.onsee} >
                    Lists
                    </h1>
            </div>

        </Fragment>
    )
}
export default Lists;
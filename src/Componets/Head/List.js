import { Fragment } from "react";
import classes from './Head.module.css';

const List = (props) => {
    return (
        <Fragment>
            <div className={classes.list}>
                <div onClick={props.onshow}>Lists</div>
                <div>Contact US</div>
            </div>

        </Fragment>
    )
}
export default List;
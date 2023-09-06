import { Fragment } from "react";
import classes from './Head.module.css';

const List = (props) => {
    return (
        <Fragment>
            <div className={classes.list}>
                <h1 > 
                    Lists
                    </h1>
                <h1 onClick={props.onshow}>Contact US</h1>
            </div>

        </Fragment>
    )
}
export default List;
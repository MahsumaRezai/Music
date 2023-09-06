import { Fragment } from "react";
import classes from './Text.module.css'

const Text = (props) => {
    return (
        <Fragment>
            <div className={classes.text}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad quod at facilis.<br></br>
                    Dolores accusamus totam autem veritatis,
               aperiam, quidem numquam harum atque magnam<br></br> itaque laboriosam illo iste quod dolor.</p>


            </div>
        </Fragment>
    )
}
export default Text;
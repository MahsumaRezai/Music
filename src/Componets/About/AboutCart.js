import classes from './About.module.css';
import img from '../image/img.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';



const AboutCart = (props) => {
    return (
        <div className={classes.about}>
            <div className={classes.cart}>
                <div className={classes.carts}>
                    <p className={classes.title}>NEWS & EVENTS</p>
                    <p className={classes.text}>04.02.2022</p>
                    <p className={classes.para}>What is your favorite music and do you konw it name
                      What is your favorite music and do you konw it name</p>
                    <div className={classes.line}></div>
                    <div className={classes.imgOne}>
                        <img src={img} alt="" />
                        <p> What is your favorite music and do you konw it name</p>
                    </div>

                </div>
                <div className={classes.carts}>
                    <p className={classes.title}> music this </p>
                    <ul className={classes.list}>
                        <li>POP</li>
                        <li>ROK</li>
                        <li>classick</li>
                        <li>international</li>
                        <li>UNIVER</li>
                    </ul>
                    <div className={classes.line}></div>
                    <ul className={classes.list}>
                        <li className={classes.li}>POP</li>
                        <li>this is frist section</li>
                        <li>this is second section</li>
                        <li>this is thridth section</li>
                        <li>UNIVER</li>
                    </ul>
                </div>


                <div className={classes.carts}>
                    <p className={classes.title}>NEW RELEASES</p>
                    <div className={classes.imgOne}>
                        <img src={img} alt="" />
                        <p> What is your favorite music and do you konw it name</p>
                    </div>
                    <div className={classes.line}></div>

                    <div className={classes.images}>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />

                    </div>


                </div>


            </div>
        </div>

    )
}
export default AboutCart
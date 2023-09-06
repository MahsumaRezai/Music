import { Fragment, useState } from "react";
import Head from "./Componets/Head/Head";
import About from "./Componets/About/About";
import Product from "./Componets/Productes/Product";
import ErroModal from "./Componets/UI/ErrorModal";




function App(props) {
    const [show, setShow] = useState(false);


    const ShowCart = () => {
        setShow(true)
    }
    const close = () => {
        setShow(false)
    }

    return (
        <Fragment>
            <Head />
            <About />
            <Product onshow={ShowCart} />
            {show && <ErroModal onconfirm={close} />}
        </Fragment>
    )

}

export default App;

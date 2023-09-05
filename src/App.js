import { Fragment } from "react";
import Head from "./Componets/Head/Head";
import About from "./Componets/About/About";
import Product from "./Componets/Productes/Product";




function App(props) {

    return (
        <Fragment>
            <Head />
            <About />
            <Product />
        </Fragment>
    )

}

export default App;

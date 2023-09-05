import { Fragment } from "react";
import Head from "./Componets/Head/Head";
import About from "./Componets/About/About";
import Product from "./Componets/Productes/Product";
import ErroModal from "./Componets/UI/ErrorModal";




function App(props) {

    return (
        <Fragment>
            <Head />
            <About />
            <Product />
            <ErroModal />
        </Fragment>
    )

}

export default App;

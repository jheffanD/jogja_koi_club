import Nav from "../../componen/navbar";
import Head from "../header/header"
import About from "../about/about";
import List from "../listikan/list";

export default function dasboart (){
    return(
        <div>
        <Nav/>
        <Head/>
        <About/>
        <List/>
        </div>
    );
}
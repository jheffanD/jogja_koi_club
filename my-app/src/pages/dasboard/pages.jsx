import Nav from "../../componen/navbar";
import Head from "../header/header"
import About from "../about/about";
import List from "../listikan/list";
import Search from "../search/search";

export default function dasboart (){
    return(
        <div>
        <Nav/>
        <Head/>
        <About/>
        <List/>
        <Search/>
        </div>
    );
}
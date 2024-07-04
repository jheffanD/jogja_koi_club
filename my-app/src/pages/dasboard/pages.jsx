// import Nav from "../../componen/navbar";
import Head from "../header/header"
import About from "../about/about";
import List from "../listikan/list";
import Search from "../search/search";
// import Footer from "../../componen/footer";

export default function dasboart (){
    return(
        <div>
        <Head/>
        <About/>
        <List/>
        <Search/>
        {/* <Footer/> */}
        </div>
    );
}
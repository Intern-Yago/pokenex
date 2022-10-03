import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({children}){
    return(
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <title>Pokénex</title>
            </Head>
            <Navbar/>
            <main className="main-container">
                {children}
            </main>
            <Footer/>
        </>
    )
}
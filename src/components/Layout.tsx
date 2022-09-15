
/* components */
import Footer from './Footer';
import Header from './Header';
// import Navigation from '../navigation/Navigation';
/* components */

const Layout = ({children}:any) => {
    return (
        <>
            <Header/>
            {/* <Navigation/> */}
            <main className="globalBackground h-screen">
                {children}
            </main>
            {/* <Footer/> */}
        </>
    )
}
export default Layout;
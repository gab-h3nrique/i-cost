
/* components */
import Footer from './Footer';
import Header from './Header';
// import Navigation from '../navigation/Navigation';
/* components */

const Layout = ({children}:any) => {
    return (
        <>
            <Header/>
            <main className="flex h-screen globalBackground p-3">
                {children}
            </main>
            {/* <Footer/> */}
        </>
    )
}
export default Layout;
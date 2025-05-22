import Footer from "./components/global/Footer"
import Header from "./components/global/Header"

function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
export default Layout
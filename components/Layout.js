import Nav from './Nav';
import Contact from '../components/Contact';
import Cards from '../components/Cards';
import layoutStyles from '../styles/Layout.module.css';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <>
        <Nav />
        <div className={layoutStyles.container}>
            <main className={layoutStyles.main}>
                <Header />
                {children}
                <Cards />
                <Contact />
            </main>
        </div>
    </>
  )
}

export default Layout
import { Outlet } from 'react-router-dom'
import Header from './Header'
import './Header.css'
import Footer from '../components/Footer'

const RootLayout = () => {
    
    return (
        <div className="root-layout">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default RootLayout
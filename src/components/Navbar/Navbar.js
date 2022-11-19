import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'



const Navbar = () => {
    return (
         <nav>
            <h1 className='h1' >Cerveceria One</h1>
            <button className='botones' >Cervezas</button>
            <button className='botones' >Pedidos</button>
            <button className='botones' >Nosotros</button>
            <CartWidget />
         </nav>
    )
}

export default Navbar 
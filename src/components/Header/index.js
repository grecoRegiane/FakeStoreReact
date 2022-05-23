import './header.css';
import { Link } from 'react-router-dom';


function Header(){
    return(
        <header>
            <Link className="logo" to="/">Fake Store</Link>
            <Link className="carrinho" to="/carrinho">Meu Carrinho</Link>
        </header>
    )
}

export default Header;
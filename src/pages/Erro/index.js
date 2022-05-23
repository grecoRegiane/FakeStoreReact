import { Link } from 'react-router-dom';
import './erro.css';

function Erro(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2> Desculpe! A página que você está procurando não foi encontrada.</h2>
            <Link to="/">Veja todos produtos!</Link>
        </div>
    )
}

export default Erro;
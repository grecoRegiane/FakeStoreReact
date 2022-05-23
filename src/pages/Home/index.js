import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';

//URL DA API: /docs#products

function Home(){
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        async function loadProdutos(){
            const response = await api.get("products")

            //console.log(response.data.slice(0,10));
            setProdutos(response.data.slice(0,10))
            setLoading(false);
        }

        loadProdutos();

    },[])

    if(loading){
        return(
            <div className='loading'>
                <h2>Carregando produtos...</h2>
            </div>

        )
    }

    return(
        <div className="container">
            <div className="lista-produtos">
                {produtos.map((produto)=>{
                    return(
                        <article key={produto.id}>
                            <strong>{produto.title}</strong>
                            <img src={produto.image} alt={produto.title}/>
                            <Link to={`/produto/${produto.id}`}>Acessar</Link>                        
                        </article>
                    )
                },)}
            </div>
        </div>
    )
}

export default Home;
import {useEffect, useState} from 'react';
import './carrinho.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Carrinho(){
    const [produtos, setProdutos] = useState([])

    useEffect(()=>{

        const meuCarrinho = localStorage.getItem("@fakestore");
        setProdutos(JSON.parse(meuCarrinho) || [])

    }, [])

    function excluirProduto(id){
        let filtraProdutos = produtos.filter( (item) => {
            return (item.id !== id)
        })

        setProdutos(filtraProdutos);
        localStorage.setItem("@fakestore", JSON.stringify(filtraProdutos))
        toast.success("Produto removido com sucesso")
    }

    return(
        <div className='meu-carrinho'>
            <h1>Meu carrinho</h1>

            {produtos.length === 0 && <span>Você não possui nenhum produto no carrinho :(</span>}

            <ul>
                {produtos.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                            <label for="quantity">Qtde:</label>
                                <input type="number" id="quantity" name="quantity" min="1" max="1000"/>
                                <Link to={`/produto/${item.id}`}>Detalhes</Link>
                                <button onClick={() => excluirProduto(item.id) }>Excluir</button>
                            </div>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Carrinho;
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './produto-info.css';
import api from '../../services/api';
import { toast } from 'react-toastify';


function Produto(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [produto, setProduto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadProduto(){
            await api.get(`/products/${id}`)
            .then((response)=>{
                setProduto(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("PRODUTO NÃO ENCONTRADO");
                navigate("/", { replace: true});
                return;
            })
        }

        loadProduto();

        return() => {
            console.log("COMPONENTE FOI DESMONTADO")
        }
    }, [navigate, id])

    function addProdutoCarrinho(){ 
        const meuCarrinho = localStorage.getItem("@fakestore");

        let produtosSalvos = JSON.parse(meuCarrinho) || [];

        const hasProduto = produtosSalvos.some( (produtosSalvo) => produtosSalvo.id === produto.id)

        if(hasProduto){
            toast.warn("Esse produto já está no seu carrinho!")
            return;
        }

        produtosSalvos.push(produto);
        localStorage.setItem("@fakestore", JSON.stringify(produtosSalvos));
        toast.success("Produto salvo com sucesso!")
        
    }

    if(loading){
        return(
            <div className='produto-info'>
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className='produto-info'>
            <h1>{produto.title}</h1>
            <img src={produto.image} alt={produto.tittle} />
            <p>R$ {produto.price}</p>
            <h3>Informações do Produto</h3>
            <span>{produto.description}</span>
            <strong>Avaliação: {produto.rating.rate} / 5</strong>
            <h3>Categoria</h3>
            <span>{produto.category}</span>
        
            <div className='area-buttons'>
                <button onClick={addProdutoCarrinho}>Adicionar ao carrinho</button>

            </div>
        </div>
    )
}

export default Produto;
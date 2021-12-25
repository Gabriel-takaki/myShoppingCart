
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react/cjs/react.development';
import ItensCard from '../components/ItensCard';

export default function Search() {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q='
    const [handleCategory, setHandleCategory] = useState();
    const [category, setCategory] = useState('computador');
    const [itens, setItens] = useState([])

    const fetchData = useCallback(async () => {
        const fetchDados = await fetch(
            `${url}${category}`,
        ).then((response) => response.json());
        setItens(fetchDados.results)
    }, [category])

    useEffect(() => {
        fetchData()
    })
    
    function handleChange({ target: {value} }){
        setHandleCategory(value)
    }
    function handleClicked(){
        setCategory(handleCategory);
    }

    function adicionaCarrinho(){
        
    }
    return (
        <div>
            <h1>Mercado livre</h1>
            <input type='text'
            onChange={handleChange}>
            </input>
            <button
            onClick={handleClicked}>
                procurar
            </button>
        { itens
        && itens.map(({ title, thumbnail, price, id }, index) => {
            return(
               <ItensCard 
               itensName={title}
               itensImage={ thumbnail }
               itensPrice={price}
               index={index}
               />
            )
        })
        }

        </div>
    )
}
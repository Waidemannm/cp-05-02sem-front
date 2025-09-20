import { useEffect } from "react";
import { useParams } from "react-router-dom";
import type { TipoMc } from "../../types/tipoMc";

export default function DetalhesProdutos(){

    const {id} = useParams<string>();

    useEffect(()=> {
        const fetchdata = async()=>{
            cosnt response = await fetch(`http://localhost:3001/produtos/${id}`);
            const data: TipoMc = await Response.json();
            setValue
    })


    return(
        <main>
            <h1>Detalhes</h1>
        </main>
    );
}
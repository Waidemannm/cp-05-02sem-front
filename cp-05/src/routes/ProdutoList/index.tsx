import { useEffect, useState } from "react";
import type { TipoMc } from "../../types/tipoMc";
import { useParams } from "react-router-dom";
import CardMc from "../../components/CardMc/CardMc";

export default function ProdutoList() {

    const{ id } = useParams<string>();
    const [produtos, setProdutos] = useState<TipoMc[]>([]);

    useEffect(() => {
        const fetchdata = async ()=>{
            const response = await fetch('http://localhost:3001/produtos');
            const data: TipoMc[] = await response.json();
            setProdutos(data);
        }
        fetchdata();
    }, [id]);

  return(
    <main className="pageCards">
        <h2>Nossos Produtos mais Famosos</h2>
        <div >{produtos.map((p) =>(
            <CardMc mc={p}/>
        ))}</div>
    </main>
  );
}
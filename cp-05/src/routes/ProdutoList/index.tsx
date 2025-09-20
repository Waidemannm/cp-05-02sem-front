import { useEffect, useState } from "react";
import type { TipoMc } from "../../types/tipoMc";
import { Link, useParams } from "react-router-dom";
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
    <main >
        <h1 className="text">Os Produtos mais Famosos</h1>
        <div className="pageCards">{produtos.map((p) =>(
            <Link to={`/produtos/${p.id}`}>
                <CardMc mc={p}/>
            </Link> 
            ))}
        </div>
        <div><Link className="adcProduto" to={"/produtos/criar"}>Adicionar Produto</Link></div>
    </main>
  );
}
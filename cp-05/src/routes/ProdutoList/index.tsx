import { useEffect, useState } from "react";
import type { TipoMc } from "../../types/tipoMc";
import { useParams } from "react-router-dom";

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
    <main>
        <div></div>
    </main>
  );
}
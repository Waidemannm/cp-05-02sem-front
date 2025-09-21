import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DeleteProduto(){

    const {id} = useParams<string>();

    const navigate = useNavigate(); 
    
    useEffect(() => {
        const fetchdata = async () => {
            await fetch(`http://localhost:3001/produtos/${id}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            },
        });
        alert("Produto apagado com sucesso!");
        navigate(`/produtos`);
            }
            fetchdata();
        }, [id, navigate])


    return(
        <main>
            <h1 className="text">Apagando Produto...</h1>
        </main>
    );
}
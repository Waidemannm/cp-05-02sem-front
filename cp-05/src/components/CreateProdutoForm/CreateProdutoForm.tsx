import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router-dom";
import type { TipoMc } from "../../types/tipoMc";
import { useEffect } from "react";

export default function CreateProdutoForm() {

    const navigate = useNavigate();

    const {register, handleSubmit, setValue} = useForm<TipoMc>();

    

    const onSubmit = handleSubmit(async (data) => {
        await fetch('http://localhost:3001/produtos', {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        alert("Produto adicionado com sucesso!");
        navigate("/produtos");
    });

    return(
        <div>
            <h1>Adicionando Produto</h1>
            <div>
                
            </div>
        </div>
    );
}
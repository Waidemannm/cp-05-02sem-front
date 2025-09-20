import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { TipoMc } from "../../types/tipoMc";

export default function CreateProdutoForm() {

    const navigate = useNavigate();

    const {register, handleSubmit} = useForm<TipoMc>();
    //POST metodo de criar objeto na API, PUT atualizar objeto na API
    //No POST não precisamos da const {id}, e nem useEffect, pois não estamos buscando um objeto existente, estamos criando um novo
    //diferente do PUT e do GET que precisa do id e do useEffect para buscar o objeto existente
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
            <h1 className="text">Adicionando Produto</h1>
            <div>
                <form className="frmCriar" onSubmit={onSubmit}>
                    {/* O campo id não é necessário no formulário de criação(POST), pois o id será gerado automaticamente pelo json-server
                    Diferente do formulário de edição(PUT) que precisa do campo id para identificar qual objeto será atualizado, ou no de deletar(DELETE) que também precisa do id para identificar qual objeto será removido */}
                    <div>
                        <label>Nome:</label>
                        <input type="text" {...register("nome", { required: true, maxLength: 100})} />
                    </div>
                    <div>
                        <label>Preço:</label>
                        <input type="number" step="0.01" {...register("preco", { required: true})} />
                    </div>
                    <div>
                        <label>URL da Imagem:</label>
                        <input type="text" {...register("urlImg", { required: true, maxLength: 355})} />
                    </div>
                    <div>
                        <button className="adcProduto" type="submit">Adicionar Produto</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
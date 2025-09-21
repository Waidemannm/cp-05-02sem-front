import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form/Form";
import { useForm } from "react-hook-form";
import type { TipoMc } from "../../types/tipoMc";

export default function EditarProdutoForm(){
    const {id} = useParams();

    const navigate = useNavigate();    

    const {register, handleSubmit} = useForm<TipoMc>();

    const onSubmit = handleSubmit(async (data) => {
        

    })



    return(
        <main>
            <h1 className="text">Editando Produto</h1>
            <Form
                register={register}
            />
        </main>
    );
}
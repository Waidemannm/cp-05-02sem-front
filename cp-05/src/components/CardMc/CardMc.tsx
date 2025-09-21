import { CiEdit } from "react-icons/ci";
import type { TipoMc } from "../../types/tipoMc";
import { Link } from "react-router-dom";

export default function CardMc(props:{mc:TipoMc}){
    return(
        <div className="card">
            <img src={props.mc.urlImg} alt="Produto do McDonald's" className="imgCard"/>
            <h2>{props.mc.nome}</h2>
            <Link to={`/produtos/editar/${props.mc.id}`}><CiEdit/></Link>
        </div>
    );
}
import type { TipoMc } from "../../types/tipoMc";

export default function CardMc(props:{mc:TipoMc}){
    return(
        <div className="card">
            <img src={props.mc.urlImg} alt="Produto do McDonald's" className="imgCard"/>
            <h2>{props.mc.nome}</h2>
        </div>
    );
}
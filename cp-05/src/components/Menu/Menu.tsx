import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div className="text">
            <Link className="cabecalho" to="/"> Home </Link> | 
            <Link className="cabecalho" to="/produtos"> Produtos </Link>
        </div>
    );
}
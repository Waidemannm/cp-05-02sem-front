import CreateProdutoForm from "../../components/CreateProdutoForm/CreateProdutoForm";

export default function AdicionarProduto(){
    return(
        <main>
            <h1 className="text">Adicionando Produto</h1>
            <div className="pageAdd">
                <CreateProdutoForm/>
            </div>
        </main>
    );
}

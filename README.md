# cp-05-02sem-front
LISTA DE EXERCÍCIOS /1   - CP5 = Valor 50pts

🧪 Exercício 1: Listagem de Produtos com useEffect e useState
Objetivo: Fazer uma requisição GET à API e renderizar os dados.

Tarefa:

Crie um componente ProdutoList.

Use useEffect para buscar os Produtos da rota /produtos.

Armazene os dados com useState.

Renderize uma lista com nome e email de cada produto.

Tipar corretamente os dados recebidos.

Se já foi realizado - padronizar a estilização


🧪 Exercício 2: Detalhes do produto com useParams
Objetivo: Navegar para uma rota dinâmica e buscar dados específicos utilizando Cards estilizados

Tarefa:

Crie uma rota /produtos/:id que renderiza o componente ProdutoDetail.

Use useParams para capturar o id.

Faça uma requisição GET para /produtos/:id.

Exiba os dados do produto (id,nome, preco) ou o que for referente ao objeto trabalhado.

Tipar corretamente o retorno da API.


Se já foi realizado - padronizar a estilização


🧪 Exercício 3: Formulário de Criação com react-hook-form e POST
Objetivo: Criar um novo obj via formulário.

Tarefa:

Crie um componente CreateProdutoForm.

Use react-hook-form para capturar os dados do obj trabalhado

Ao enviar, faça uma requisição POST para o obj.

Após sucesso, redirecione para a lista usando useNavigate.

Extras:

Valide os campos (ex: preço obrigatório).

Tipar os dados do formulário.

🧪 Exercício 4: Edição de Produtos com PUT
Objetivo: Editar dados existentes usando formulário e rota dinâmica.

Tarefa:

Crie uma rota /produtos/:id/edit que renderiza EditProdutoForm.

Use useParams para capturar o id.

Busque os dados do produto e preencha o formulário.

Ao enviar, faça uma requisição PUT para /produtos/:id.

Redirecione para /produtos/:id.

Extras:

Reutilize o componente de formulário do exercício 3 com props.

🧪 Exercício 5: Remoção de Produto com DELETE
Objetivo: Deletar um produto da lista.

Tarefa:

No componente ProdutoList, adicione um botão "Excluir" ao lado de cada produto.

Ao clicar, faça uma requisição DELETE para /produtos/:id.

Atualize a lista após a exclusão.

Extras:

Adicione uma confirmação antes de excluir.

Tipar corretamente a função de exclusão.

- Utilize o exercício da aula como base deste exercício.
- O projeto deve ser realizado em grupo do challenger e entregue somente o projeto sem a pasta node_modules. - Caso a pasta node_modules for entregue será descontado 50% da nota.
- Coloque todos os dados dos integrantes e detalhes do projeto no README.MD

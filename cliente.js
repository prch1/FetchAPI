const informacoesClientes = [
                {
                    cpf : 55566677788 ,
                    nome : "PR"
                },
                {
                    cpf : 5554445658 ,
                    nome : "Sandy"
                }
]

const corpoTabela = document.querySelector("[data-conteudo-tabela]");

const exibeCliente = (cpf, nome) => {

    const linha = document.createElement('tr')

    const conteudoLinha =`
    <td>${cpf}</td>
    <td>${nome}</td>
     `
   linha.innerHTML = conteudoLinha;
   return linha
}

informacoesClientes.forEach( indice => {

    corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome))
}) 
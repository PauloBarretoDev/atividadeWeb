var emails = [];
var nomes = [];
var senhas = [];

function cadastrar(){
    
    const email = document.getElementById('email').value;
    
    emails.push(email);
    console.log(emails);

    const nome = document.getElementById('nome').value;
    nomes.push(nome);
    console.log(nomes);

    const senha = document.getElementById('senha').value;
    senhas.push(senha);
    console.log(senhas);

    alert('Cadastro com sucesso!')
}
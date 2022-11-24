function cadastrarConta(nome,email,senha,confirmaSenha){

    var nomeCompleto = nome;
    var emailuser = email;
    var senhauser  = senha;
    var senhaconfirma = confirmaSenha;
    
    console.log(nomeCompleto);
    console.log(emailuser);
    console.log(senhauser);
    console.log(senhaconfirma);

    alert("Cadastrado com sucesso!")
    location.href = "login.html";
}

function autenticaLogin(){

    let loginCorreto = 'admin@admin.com';
    let senhaCorreta = 'admin';

    var login = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(login === loginCorreto & senha === senhaCorreta){
        alert("Login efetuado com sucesso!");
        location.href = "produtos.html";
    }else{
        alert("Usúario ou senha incorretos!")
    }
}
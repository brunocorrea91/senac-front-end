function validaForm(){
    nome = formUser.nome.value;
    email = formUser.email.value;
    telefone = formUser.telefone.value;
    endereco = formUser.endereco.value;
    cpf = formUser.cpf.value;
    cnpj = formUser.cnpj.value;
    senha = formUser.senha.value;
    senhaR - formUser.senhaR.value;

    if(nome =="" || nome.length <= 5){
        alert("Informe o nome completo")
        formUser.nome.focus();
        return false;
    }
    if(email =="" || !email.includes("@") || email.length <= 5){
        alert("Informe email corretamente!");
        formUser.email.focus();
        return false;
    }
    if(telefone =="" || telefone.length <= 10){
        alert("Informe o número de telefone completo")
        formUser.telefone.focus();
        return false;
    }
    if(cpf =="" || cpf.length != 14){
        alert("CPF inválido.")
        formUser.cpf.focus();
        return false;
    } 
    if(cnpj =="" || cnpj.length != 18){
        alert("CNPJ inválido.")
        formUser.cnpj.focus();
        return false;
    }
    if(endereco =="" || endereco.length <= 5){
        alert("Endereço inválido.")
        formUser.endereco.focus();
        return false;
    }
    if(senha =="" || senhaR == "" || senha.length < 8 || senhaR.length <8){
        alert("formato de senha inválida.")
        formUser.senha.focus();
        return false;
    }
    if(senha !== senhaR){
        alert("Senha inválida!")
        form.user.senha.focus();
        return false;
    }
}
function confirmaSenha(s){
    senha = document.getElementById("senha");
    senhaR = s;
    if (senha.value === senhaR.value){
        senha.style.background = "green";
        senhaR.style.background = "green";
    }else {
        senha.style.background = "red";
        senhaR.style.background = "red";
    }
}
    

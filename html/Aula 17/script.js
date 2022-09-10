function validaForm() {
    nome = formUser.nome.value;
    email = formUser.email.value;
    telefone = formUser.telefone.value;
    endereco = formUser.endereco.value;
    cpf = formUser.cpf.value;
    cnpj = formUser.cnpj.value;
    senha = formUser.senha.value;
    senhaR = formUser.senhaR.value;

    if (nome == "" || nome.length <= 5) {
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }

    if (email == "" || !email.includes("@") || email.length <= 5) {
        alert("Informe email corretamente!");
        formUser.email.focus();
        return false;
    }
    //(51) 3344-3344 || (51) 99988-8899
    //if (telefone == "" || telefone.length <=10){
    //   alert("Telefone incorreto!");
    //   formUser.telefone.focus();
    //   return false;
    //   }
    //823.951.290-97
    if (cpf = "" || cpf.length != 14) {
        alert("CPF inválido!");
        formUser.cpf.focus();
        return false;
    }
    //53.592.717/0001-36
    if (cnpj == "" || cnpj.length != 18) {
        alert("CNPJ inválido!");
        formUser.cnpj.focus();
        return false;
    }

    if (endereco == "" || endereco.length <= 5) {
        alert("Endereço incompleto!");
        formUser.endereco.focus();
        return false;
    }

    if (senha == "" || senhaR == "" || senha.length < 8 || senhaR.length < 8) {
        alert("Senha inválida!");
        formUser.senha.focus();
        return false;
    }

    if (senha != senhaR) {
        alert("Senha inválida!");
        formUser.senha.focus();
        return false;
    }
}

function confirmaSenha(s) {
    senha = document.getElementById("senha");
    senhaR = s;
    if (senha.value === senhaR.value) {
        senhaR.style.border = "1px solid gray";
    } else {
        senhaR.style.border = "5px solid red";
    }
}

function lerImg() {
    if (this.files && this.files[0]) {
        file = new FileReader();
        file.onload = function (e) {//função anônima
            document.getElementById("preview").src = e.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}

function mascaraTelefone(fone) {
    //
    tel = fone.value;
    //não aceitar texto
    if (isNaN(tel[tel.length - 1])) {
        fone.value = tel.substring(0, tel.length - 1);
        return;
    }
    //limitar quantia de caracteres
    fone.setAttribute("maxlength", "13");
    //formatar
    if (tel.length == 1) fone.value = "(" + fone.value;
    if (tel.length == 3) fone.value += ")";
    if (tel.length == 8) fone.value += "-";
}
function mascaraCPF(numCPF) {
    cpf = numCPF.value;
    numCPF.setAttribute("maxlength", "14");
    if (cpf.length == 3) numCPF.value = numCPF.value + ".";
    if (cpf.length == 7) numCPF.value = numCPF.value + ".";
    if (cpf.length == 11) numCPF.value += "-";

    if (isNaN(cpf[cpf.length - 1])) {
        numCPF.value = cpf.substring(0, numCPF.length - 1);
        return;
    }
}
function mascaraCNPJ(numCNPJ) {
    cnpj = numCNPJ.value;
    numCNPJ.setAttribute("maxlength", "18");
    if (cnpj.length == 2) numCNPJ.value = numCNPJ.value + ".";
    if (cnpj.length == 6) numCNPJ.value = numCNPJ.value + ".";
    if (cnpj.length == 10) numCNPJ.value = numCNPJ.value + "/";
    if (cnpj.length == 15) numCNPJ.value = numCNPJ.value + "-";

    if (isNaN(cnpj[cnpj.length - 1])) {
        numCNPJ.value = cnpj.substring(0, numCNPJ.length - 1);
        return;
    }
}
function lancheSelecionado() {
    opSelect = document.getElementById("selecionaLanche").value;
    if (opSelect != "") {
        document.getElementById("lanche").innerHTML = "Você selecionou o lanche: " + opSelect;
    } else {
        document.getElementById("lanche").innerHTML = "";
    }
}

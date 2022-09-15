function abrirCPF() {
    campoPF.type = "text";
    campoPJ.type = "hidden";
    campoPJ.value = '';
}
function abrirCNPJ() {
    campoPJ.type = "text";
    campoPF.type = "hidden";
    campoPF.value = '';

}
function mostrarTudo() {
    nome = formUser.nome.value;
    email = formUser.email.value;
    telefoneFixo = formUser.telefoneFixo.value;
    telefoneCelular = formUser.telefoneCelular.value;
    endereco = formUser.endereco.value;
    




    if (formUser.pessoa.value == "PF") {
        pessoa = formUser.inserirCampoPF.value;
    }else{
        pessoa = formUser.inserirCampoPJ.value;
    }

    if (formUser.sexo.value == "Masculino"){
        sexo = "Masculino"
    }else{
        sexo = "Feminino";
    }
    
    if (formUser.cidade.value == "POA"){
        cidade = "Porto Alegre"
    }else if (formUser.cidade.value == "GRV"){
        cidade = "Gravataí"
    }else if (formUser.cidade.value == "CAC"){
        cidade = "Cachoeirinha"
    }else if (formUser.cidade.value == "CAN"){
        cidade = "Canoas"
    }else{
        cidade = "Informar cidade. Realizar formulário novamente."
    }
    
    
    if (formUser.estadoCivil.value == "solteiro"){
        estadoCivil = "Solteiro"
    }else if (formUser.estadoCivil.value == "casado"){
        estadoCivil = "Casado"
    }else if (formUser.estadoCivil.value == "uniaoEstavel"){
        estadoCivil = "União Estável"
    }else if (formUser.cidade.value == "viuvo"){
        estadoCivil = "Viúvo"
    }else{
        estadoCivil = "Informar estado ciivl. Realizar formulário novamente."
    }

       alert("Nome: " + nome + "\nN° do documento: " + pessoa + "\nSexo: " + sexo + "\nEstado Civil: "+ estadoCivil 
            + "\nE-mail: " + email +"\nTelefone Fixo: " + telefoneFixo 
            + "\nTelefone Celular: "+ telefoneCelular + "\nEndereço: " + endereco 
            + "\nCidade: " + cidade);
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

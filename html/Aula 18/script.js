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
    


    if (nome == "" || nome.length <= 5) {
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }

    if (formUser.pessoa.value == "PF") {
        pessoa = formUser.inserirCampoPF.value;
    }else if (formUser.pessoa.value == "PJ"){
        pessoa = formUser.inserirCampoPJ.value;
    }else{
        alert("Informe o núumero de Identidade!");
        formUser.pessoa.focus();
        return false;
    }


    if (formUser.sexo.value == "Masculino"){
        sexo = "Masculino"
    }else if (formUser.sexo.value == "Feminino"){
        sexo = "Feminino";
    }else{
        alert("Informe o sexo!");
        formUser.sexo.focus();
        return false;
    }

    if (formUser.estadoCivil.value == "solteiro"){
        estadoCivil = "Solteiro"
    }else if (formUser.estadoCivil.value == "casado"){
        estadoCivil = "Casado"
    }else if (formUser.estadoCivil.value == "uniaoEstavel"){
        estadoCivil = "União Estável"
    }else if (formUser.estadoCivil.value == "viuvo"){
        estadoCivil = "Viúvo"
    }else{
        alert("Informe o estado civil!");
        formUser.estadoCivil.focus();
        return false;
    }
    

    if (email == "" || !email.includes("@") || email.length <= 5) {
        alert("Informe email corretamente!");
        formUser.email.focus();
        return false;
    }
    if (telefoneFixo == "" || telefoneFixo.length <= 5) {
        alert("Informe o número de telefone correto!");
        formUser.telefoneFixo.focus();
        return false;
    }
    if (telefoneCelular == "" || telefoneCelular.length <= 5) {
        alert("Informe o número de telefone correto!");
        formUser.telefoneCelular.focus();
        return false;
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
        alert("Informe a cidade!");
        formUser.cidade.focus();
        return false;
    }
    
    if(formUser.endereco.value==""){
        alert("Informe o endereço!");
        formUser.cidade.focus();
        return false;
    }else{
        endereco = formUser.endereco.value;
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

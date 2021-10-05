function login(){
    console.log("login");
    window.location.href = "index_auth.html";
    return false;
}

function redirectToEdit(){
    console.log("redirectToEdit");
    const value = document.getElementById("form-id").value;
    switch (value) {
        case "sala":
            window.location.href = "editar_sala.html";
            break;
        case "sessao":
            window.location.href = "editar_sessao.html";
            break;
        default:
            window.location.href = "editar_peca.html";
            break;
    }
    window.alert("Entidade editada com sucesso");
    return false;
}

function confirmDelete(){
    window.confirm("Tem certeza que deseja excluir esta entidade?");
    window.location.href = "../index_auth.html";
    return false;
}

function handleDeleteAccount(){
    const res = window.confirm('Realmente deseja excluir sua conta?');
    if(res){
        window.alert("Conta excluida");
        window.location.href = "index.html";
    }
    return false;
}
var email = document.getElementById("email");
var password = document.getElementById("password");
var foto = document.getElementById("foto");

function buscaUsuario(identificacao) {
    // Busco o indice do usuário na lista
    var posicao = usersList.findIndex(
        user => user.email === identificacao ||
            user.login.username === identificacao
    );

    // Verifico se o usuário existe
    if (posicao === -1) {
        return null;
    }

    return usersList[posicao];
}

function entrar(event) {
    event.preventDefault();

    // Busco o usuario
    var usuario = buscaUsuario(email.value);

    // Verifico se o usuário existe
    if (usuario === null) {
        alert("Usuário não encontrado");
        return;
    }

    // Valido se senha está incorreta
    if (usuario.login.password !== password.value) {
        alert("Senha incorreta");
        return;
    }

    alert("OK");
}

function trocafoto() {
    // Volto a foto para o Avatar padrão
    foto.src = "./images/user.jpg";

    // Verifico se algo foi digitado para validar
    if (email.value === "") {
        return;
    }

    var usuario = buscaUsuario(email.value);
    
    // Verifico se o usuário existe
    if (usuario === null) {
        alert("Usuário não encontrado");
        return;
    }

    // coloco o usuário selecionado em uma variável
    email.value = usuario.email;
    foto.src = usuario.picture.large;
}
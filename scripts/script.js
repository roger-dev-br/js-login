var email = document.getElementById("email");
var password = document.getElementById("password");
var foto = document.getElementById("foto");

function entrar(event) {
    event.preventDefault();

    // Busco o indice do usuário na lista
    var posicao = usersList.findIndex(user => user.email === email.value);

    // Verifico se o usuário existe
    if (posicao === -1) {
        alert("Usuário não encontrado");
        return;
    }

    // coloco o usuário selecionado em uma variável
    var usuario = usersList[posicao];

    // Valido se senha está incorreta
    if (usuario.login.password !== password.value) {
        alert("Senha incorreta");
        return;
    }
    
    location.href = "dashboard.html";
}

function trocafoto() {
    // Volto a foto para o Avatar padrão
    foto.src = "./images/user.jpg";

    // Verifico se algo foi digitado para validar
    if (email.value === "") {
        return;
    }

    // Busco o indice do usuário na lista
    var posicao = usersList.findIndex(
        user => user.email === email.value || 
            user.login.username === email.value
    );

    // Verifico se o usuário existe
    if (posicao === -1) {
        alert("Usuário não encontrado");
        return;
    }

    // coloco o usuário selecionado em uma variável
    var usuario = usersList[posicao];
    email.value = usuario.email;
    foto.src = usuario.picture.large;
}
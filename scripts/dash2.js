function calculaMedia(gender) {
    var total = 0;
    var quantidade = 0;

    for (var usuario of usersList) {
        if (usuario.gender === gender || gender === null) {
            total += usuario.age;
            quantidade++;
        }
    }

    return total / quantidade;
}

function somaIdades() {
    var soma = 0;
    for (var usuario of usersList) {
        soma += usuario.age;
    }

    return soma;
}

function quantidadeDeHomens() {
    var quantidade = 0;

    for (var usuario of usersList) {
        if (usuario.gender === "male") {
            quantidade++;
        }
    }

    return quantidade;
}

function quantidadeDeMulheres() {
    var quantidade = 0;

    for (var usuario of usersList) {
        if (usuario.gender === "female") {
            quantidade++;
        }
    }

    return quantidade;
}

function quantidadeTotal() {
    return usersList.length;  
}

window.addEventListener('load', function () {
    // Soma das idades
    document.getElementById("somaIdades").innerText = somaIdades();
    // Media geral de idade
    document.getElementById("mediaGeral").innerText = calculaMedia(null).toFixed(0);
    // Média de idade dos homens
    document.getElementById("mediaHomens").innerText = calculaMedia("male").toFixed(0);
    // Media de idade das mulheres
    document.getElementById("mediaMulheres").innerText = calculaMedia("female").toFixed(0);

    // População de homens
    document.getElementById("percHomens").innerText = ((quantidadeDeHomens() / quantidadeTotal()) * 100).toFixed(2) + "%";    
    document.getElementById("percHomensBar").style = `width: ${((quantidadeDeHomens() / quantidadeTotal()) * 100).toFixed(2)}%`;
    
    // População de mulheres
    document.getElementById("percMulher").innerText = ((quantidadeDeMulheres() / quantidadeTotal()) * 100).toFixed(2) + "%";    
    document.getElementById("percMulherBar").style = `width: ${((quantidadeDeMulheres() / quantidadeTotal()) * 100).toFixed(2)}%`;     

    setInterval(function() {
        var data = new Date().toLocaleDateString();
        var horario = new Date().toTimeString().substring(0, 8);
        document.getElementById("horario").innerHTML = `${data} ${horario}`;
    }, 1000);

    var usuario = JSON.parse(localStorage.getItem("usuario"));
    document.getElementById("avatar").src = usuario.picture.thumbnail;
    document.getElementById("nome").innerText = usuario.name;
});
let a1 = window.document.getElementById('jogar1').value
let a2 = window.document.getElementById('jogar2').value
let a3 = window.document.getElementById('jogar3').value
let b1 = window.document.getElementById('jogar4').value
let b2 = window.document.getElementById('jogar5').value
let b3 = window.document.getElementById('jogar6').value
let c1 = window.document.getElementById('jogar7').value
let c2 = window.document.getElementById('jogar8').value
let c3 = window.document.getElementById('jogar9').value

let res = window.document.querySelector('div#total')
let a1res = window.document.getElementById('res1')
let a2res = window.document.getElementById('res2')
let a3res = window.document.getElementById('res3')
let b1res = window.document.getElementById('res4')
let b2res = window.document.getElementById('res5')
let b3res = window.document.getElementById('res6')
let c1res = window.document.getElementById('res7')
let c2res = window.document.getElementById('res8')
let c3res = window.document.getElementById('res9')

let g = false
let j1, j2, j3, j4, j5, j6, j7, j8, j9 = false
let sinal

let escolhaSinalX = window.document.querySelector('.escolherX')
let escolhaSinalO = window.document.querySelector('.escolherO')
let campoVelha = window.document.querySelector('.espacoA')

let sinalescolhido = window.document.querySelector('.sinalescolhido')

escolhaSinalO.addEventListener('click', () => {
    campoVelha.classList.toggle('espacoA')
    window.document.querySelector('section').style.background = 'white'
})

escolhaSinalX.addEventListener('click', () => {
    campoVelha.classList.toggle('espacoA')
    window.document.querySelector('section').style.background = 'white'
})

function jogada1() {

    sinal = document.querySelector('input[type=radio][name=sinal]:checked');
    sinalescolhido.innerHTML = `Última jogada foi de ${sinal.value}`

    if (a1.value != sinal.value) {
        if (sinal.value == "X") {
            a1res.style.color = 'black'
            a1res.innerText = sinal.value
            document.getElementById('X').disabled = true;
            document.getElementById('O').disabled = false;
            document.getElementById('X').checked = false
            document.getElementById('O').checked = true
        } else {
            a1res.style.color = 'blue'
            a1res.innerText = sinal.value
            document.getElementById('X').disabled = false;
            document.getElementById('O').disabled = true;
            document.getElementById('X').checked = true
            document.getElementById('O').checked = false
        }
        a1 = sinal
        sinal.checked = false
        j1 = true
        verGanhou()
    }
}

function jogada2() {
    sinal = document.querySelector('input[type=radio][name=sinal]:checked');
    sinalescolhido.innerHTML = `Última jogada foi de ${sinal.value}`

    if (a2.value != sinal) {
        if (sinal.value == "X") {
            a2res.style.color = 'black'
            a2res.innerText = sinal.value
            document.getElementById('X').disabled = true;
            document.getElementById('O').disabled = false;
            document.getElementById('X').checked = false
            document.getElementById('O').checked = true
        } else {
            a2res.style.color = 'blue'
            a2res.innerText = sinal.value
            document.getElementById('X').disabled = false;
            document.getElementById('O').disabled = true;
            document.getElementById('X').checked = true
            document.getElementById('O').checked = false
        }
        a2 = sinal
        sinal.checked = false
        j2 = true
        verGanhou()
    }
}

function jogada3() {
    sinal = document.querySelector('input[type=radio][name=sinal]:checked');
    sinalescolhido.innerHTML = `Última jogada foi de ${sinal.value}`

    if (a3.value != sinal) {
        if (sinal.value == "X") {
            a3res.style.color = 'black'
            a3res.innerText = sinal.value
            document.getElementById('X').disabled = true;
            document.getElementById('O').disabled = false;
            document.getElementById('X').checked = false
            document.getElementById('O').checked = true
        } else {
            a3res.style.color = 'blue'
            a3res.innerText = sinal.value
            document.getElementById('X').disabled = false;
            document.getElementById('O').disabled = true;
            document.getElementById('X').checked = true
            document.getElementById('O').checked = false
        }
        a3 = sinal
        sinal.checked = false
        j3 = true
        verGanhou()
    }
}

function jogada4() {
    sinal = document.querySelector('input[type=radio][name=sinal]:checked');
    sinalescolhido.innerHTML = `Última jogada foi de ${sinal.value}`

    if (b1res.value != sinal) {
        if (sinal.value == "X") {
            b1res.style.color = 'black'
            b1res.innerText = sinal.value
            document.getElementById('X').disabled = true;
            document.getElementById('O').disabled = false;
            document.getElementById('X').checked = false
            document.getElementById('O').checked = true
        } else {
            b1res.style.color = 'blue'
            b1res.innerText = sinal.value
            document.getElementById('X').disabled = false;
            document.getElementById('O').disabled = true;
            document.getElementById('X').checked = true
            document.getElementById('O').checked = false
        }
        b1 = sinal
        sinal.checked = false
        j4 = true
        verGanhou()
    }
}

function jogada5() {
    sinal = document.querySelector('input[type=radio][name=sinal]:checked');
    sinalescolhido.innerHTML = `Última jogada foi de ${sinal.value}`

    if (b2.value != sinal) {
        if (sinal.value == "X") {
            b2res.style.color = 'black'
            b2res.innerText = sinal.value
            document.getElementById('X').disabled = true;
            document.getElementById('O').disabled = false;
            document.getElementById('X').checked = false
            document.getElementById('O').checked = true
        } else {
            b2res.style.color = 'blue'
            b2res.innerText = sinal.value
            document.getElementById('X').disabled = false;
            document.getElementById('O').disabled = true;
            document.getElementById('X').checked = true
            document.getElementById('O').checked = false
        }
        b2 = sinal
        sinal.checked = false
        j5 = true
        verGanhou()
    }
}

function jogada6() {
    sinal = document.querySelector('input[type=radio][name=sinal]:checked');
    sinalescolhido.innerHTML = `Última jogada foi de ${sinal.value}`


    if (b3.value != sinal) {
        if (sinal.value == "X") {
            b3res.style.color = 'black'
            b3res.innerText = sinal.value
            document.getElementById('X').disabled = true;
            document.getElementById('O').disabled = false;
            document.getElementById('X').checked = false
            document.getElementById('O').checked = true
        } else {
            b3res.style.color = 'blue'
            b3res.innerText = sinal.value
            document.getElementById('X').disabled = false;
            document.getElementById('O').disabled = true;
            document.getElementById('X').checked = true
            document.getElementById('O').checked = false
        }
        b3 = sinal
        sinal.checked = false
        j6 = true
        verGanhou()
    }
}

function jogada7() {
    sinal = document.querySelector('input[type=radio][name=sinal]:checked');
    sinalescolhido.innerHTML = `Última jogada foi de ${sinal.value}`

    if (c1.value != sinal) {
        if (sinal.value == "X") {
            c1res.style.color = 'black'
            c1res.innerText = sinal.value
            document.getElementById('X').disabled = true;
            document.getElementById('O').disabled = false;
            document.getElementById('X').checked = false
            document.getElementById('O').checked = true
        } else {
            c1res.style.color = 'blue'
            c1res.innerText = sinal.value
            document.getElementById('X').disabled = false;
            document.getElementById('O').disabled = true;
            document.getElementById('X').checked = true
            document.getElementById('O').checked = false
        }
        c1 = sinal
        sinal.checked = false
        j7 = true
        verGanhou()
    }
}

function jogada8() {
    sinal = document.querySelector('input[type=radio][name=sinal]:checked');
    sinalescolhido.innerHTML = `Última jogada foi de ${sinal.value}`

    if (c2.value != sinal) {
        if (sinal.value == "X") {
            c2res.style.color = 'black'
            c2res.innerText = sinal.value
            document.getElementById('X').disabled = true;
            document.getElementById('O').disabled = false;
            document.getElementById('X').checked = false
            document.getElementById('O').checked = true
        } else {
            c2res.style.color = 'blue'
            c2res.innerText = sinal.value
            document.getElementById('X').disabled = false;
            document.getElementById('O').disabled = true;
            document.getElementById('X').checked = true
            document.getElementById('O').checked = false
        }
        c2 = sinal
        sinal.checked = false
        j8 = true
        verGanhou()
    }
}

function jogada9() {
    sinal = document.querySelector('input[type=radio][name=sinal]:checked');
    sinalescolhido.innerHTML = `Última jogada foi de ${sinal.value}`
    if (c3.value != sinal) {
        if (sinal.value == "X") {
            c3res.style.color = 'black'
            c3res.innerText = sinal.value
            document.getElementById('X').disabled = true;
            document.getElementById('O').disabled = false;
            document.getElementById('X').checked = false
            document.getElementById('O').checked = true
        } else {
            c3res.style.color = 'blue'
            c3res.innerText = sinal.value
            document.getElementById('X').disabled = false;
            document.getElementById('O').disabled = true;
            document.getElementById('X').checked = true
            document.getElementById('O').checked = false
        }
        c3 = sinal
        sinal.checked = false
        j9 = true
        verGanhou()
    }
}

function verGanhou() {
    if (a1.value == sinal.value && a2.value == sinal.value && a3.value == sinal.value) {
        a1res.style.color = 'purple'
        a2res.style.color = 'purple'
        a3res.style.color = 'purple'
        a1res.style.fontWeight = 'bold'
        a2res.style.fontWeight = 'bold'
        a3res.style.fontWeight = 'bold'
        a1res.style.fontSize = '100px'
        a2res.style.fontSize = '100px'
        a3res.style.fontSize = '100px'
        g = true
    }
    if (b1.value == sinal.value && b2.value == sinal.value && b3.value == sinal.value) {
        b1res.style.color = 'purple'
        b2res.style.color = 'purple'
        b3res.style.color = 'purple'
        b1res.style.fontWeight = 'bold'
        b2res.style.fontWeight = 'bold'
        b3res.style.fontWeight = 'bold'
        b1res.style.fontSize = '100px'
        b2res.style.fontSize = '100px'
        b3res.style.fontSize = '100px'
        g = true
    }
    if (c1.value == sinal.value && c2.value == sinal.value && c3.value == sinal.value) {
        c1res.style.color = 'purple'
        c2res.style.color = 'purple'
        c3res.style.color = 'purple'
        c1res.style.fontWeight = 'bold'
        c2res.style.fontWeight = 'bold'
        c3res.style.fontWeight = 'bold'
        c1res.style.fontSize = '100px'
        c2res.style.fontSize = '100px'
        c3res.style.fontSize = '100px'
        g = true
    } if (a1.value == sinal.value && b1.value == sinal.value && c1.value == sinal.value) {
        a1res.style.color = 'purple'
        b1res.style.color = 'purple'
        c1res.style.color = 'purple'
        a1res.style.fontWeight = 'bold'
        b1res.style.fontWeight = 'bold'
        c1res.style.fontWeight = 'bold'
        a1res.style.fontSize = '100px'
        b1res.style.fontSize = '100px'
        c1res.style.fontSize = '100px'
        g = true
    }
    if (a2.value == sinal.value && b2.value == sinal.value && c2.value == sinal.value) {
        a2res.style.color = 'purple'
        b2res.style.color = 'purple'
        c2res.style.color = 'purple'
        a2res.style.fontWeight = 'bold'
        b2res.style.fontWeight = 'bold'
        c2res.style.fontWeight = 'bold'
        a2res.style.fontSize = '100px'
        b2res.style.fontSize = '100px'
        c2res.style.fontSize = '100px'
        g = true
    }
    if (a3.value == sinal.value && b3.value == sinal.value && c3.value == sinal.value) {
        a3res.style.color = 'purple'
        b3res.style.color = 'purple'
        c3res.style.color = 'purple'
        a3res.style.fontWeight = 'bold'
        b3res.style.fontWeight = 'bold'
        c3res.style.fontWeight = 'bold'
        a3res.style.fontSize = '100px'
        b3res.style.fontSize = '100px'
        c3res.style.fontSize = '100px'
        g = true
    }
    if (a1.value == sinal.value && b2.value == sinal.value && c3.value == sinal.value) {
        a1res.style.color = 'purple'
        b2res.style.color = 'purple'
        c3res.style.color = 'purple'
        a1res.style.fontWeight = 'bold'
        b2res.style.fontWeight = 'bold'
        c3res.style.fontWeight = 'bold'
        a1res.style.fontSize = '100px'
        b2res.style.fontSize = '100px'
        c3res.style.fontSize = '100px'
        g = true
    }
    if (c1.value == sinal.value && b2.value == sinal.value && a3.value == sinal.value) {
        c1res.style.color = 'purple'
        b2res.style.color = 'purple'
        a3res.style.color = 'purple'
        c1res.style.fontWeight = 'bold'
        b2res.style.fontWeight = 'bold'
        a3res.style.fontWeight = 'bold'
        c1res.style.fontSize = '100px'
        b2res.style.fontSize = '100px'
        a3res.style.fontSize = '100px'
        g = true
    }
    verGanhador()
}

function verGanhador() {
    let quemganhou = window.document.querySelector('.ganhador')
    if (g === true) {
        quemganhou.innerHTML = `O ganhador foi ${sinal.value}`
        findJogo()
    }
    if (g === false) {
        quemganhou.innerHTML = `Sem ganhador`
    }
    if (g === false && j1 === true && j2 === true && j3 === true && j4 === true && j5 === true && j6 === true && j7 === true && j8 === true && j9 === true) {
        quemganhou.innerHTML = `Ninguém ganhou, deu empate. Reinicie o Jogo.`
    }
    return
}

function findJogo() {

    document.getElementById('X').checked = false;
    document.getElementById('O').checked = false;
    document.getElementById('X').disabled = true;
    document.getElementById('O').disabled = true;

    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('src', 'img/fogos.gif')
    img.style.position = 'absolute'
    document.querySelector('body').style.background = 'url(img/fogos.gif)'
    document.body.style.backgroundColor = 'rgb(70, 142, 236)';

    var img2 = window.document.createElement('img2')
    img2.setAttribute('id', 'jogo')
    img2.setAttribute('src', 'img/jogo.jpg')
    document.querySelector('section').style.background = 'url(img/jogo.jpg)'

    const music = new Audio('som/som.mp3');
    music.play();
    res.appendChild(img, img2)

    var rodar = document.getElementById('campo')
    rodar.style.transform = 'rotate(50deg)'
}

function reiniciar() {
    location.reload(true);
}
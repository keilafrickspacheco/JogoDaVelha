function verGanhador() {
    if (a1.value == sinal.value && a2.value == sinal.value && a3.value == sinal.value) {
        a1res.style.color = 'purple';
        a2res.style.color = 'purple';
        a3res.style.color = 'purple';
        a1res.style.fontWeight = 'bold';
        a2res.style.fontWeight = 'bold';
        a3res.style.fontWeight = 'bold';
        a1res.style.fontSize = '100px';
        a2res.style.fontSize = '100px';
        a3res.style.fontSize = '100px';
        g = true;
    } if (b1.value == sinal.value && b2.value == sinal.value && b3.value == sinal.value) {
        b1res.style.color = 'purple';
        b2res.style.color = 'purple';
        b3res.style.color = 'purple';
        b1res.style.fontWeight = 'bold';
        b2res.style.fontWeight = 'bold';
        b3res.style.fontWeight = 'bold';
        b1res.style.fontSize = '100px';
        b2res.style.fontSize = '100px';
        b3res.style.fontSize = '100px';
        g = true;
    } if (c1.value == sinal.value && c2.value == sinal.value && c3.value == sinal.value) {
        c1res.style.color = 'purple';
        c2res.style.color = 'purple';
        c3res.style.color = 'purple';
        c1res.style.fontWeight = 'bold';
        c2res.style.fontWeight = 'bold';
        c3res.style.fontWeight = 'bold';
        c1res.style.fontSize = '100px';
        c2res.style.fontSize = '100px';
        c3res.style.fontSize = '100px';
        g = true;
    } if (a1.value == sinal.value && b1.value == sinal.value && c1.value == sinal.value) {
        a1res.style.color = 'purple';
        b1res.style.color = 'purple';
        c1res.style.color = 'purple';
        a1res.style.fontWeight = 'bold';
        b1res.style.fontWeight = 'bold';
        c1res.style.fontWeight = 'bold';
        a1res.style.fontSize = '100px';
        b1res.style.fontSize = '100px';
        c1res.style.fontSize = '100px';
        g = true;
    } if (a2.value == sinal.value && b2.value == sinal.value && c2.value == sinal.value) {
        a2res.style.color = 'purple';
        b2res.style.color = 'purple';
        c2res.style.color = 'purple';
        a2res.style.fontWeight = 'bold';
        b2res.style.fontWeight = 'bold';
        c2res.style.fontWeight = 'bold';
        a2res.style.fontSize = '100px';
        b2res.style.fontSize = '100px';
        c2res.style.fontSize = '100px';
        g = true;
    } if (a3.value == sinal.value && b3.value == sinal.value && c3.value == sinal.value) {
        a3res.style.color = 'purple';
        b3res.style.color = 'purple';
        c3res.style.color = 'purple';
        a3res.style.fontWeight = 'bold';
        b3res.style.fontWeight = 'bold';
        c3res.style.fontWeight = 'bold';
        a3res.style.fontSize = '100px';
        b3res.style.fontSize = '100px';
        c3res.style.fontSize = '100px';
        g = true;
    } if (a1.value == sinal.value && b2.value == sinal.value && c3.value == sinal.value) {
        a1res.style.color = 'purple';
        b2res.style.color = 'purple';
        c3res.style.color = 'purple';
        a1res.style.fontWeight = 'bold';
        b2res.style.fontWeight = 'bold';
        c3res.style.fontWeight = 'bold';
        a1res.style.fontSize = '100px';
        b2res.style.fontSize = '100px';
        c3res.style.fontSize = '100px';
        g = true;
    } if (c1.value == sinal.value && b2.value == sinal.value && a3.value == sinal.value) {
        c1res.style.color = 'purple';
        b2res.style.color = 'purple';
        a3res.style.color = 'purple';
        c1res.style.fontWeight = 'bold';
        b2res.style.fontWeight = 'bold';
        a3res.style.fontWeight = 'bold';
        c1res.style.fontSize = '100px';
        b2res.style.fontSize = '100px';
        a3res.style.fontSize = '100px';
        g = true;
    }

    let quemganhou = window.document.querySelector('.ganhador');
    if (g === true) {
        quemganhou.innerHTML = `O ganhador foi ${sinal.value}`;
        findJogo();
    } if (g === false) {
        quemganhou.innerHTML = `Não teve ganhador, deu empate. Reiniciar jogo`;
    }
}

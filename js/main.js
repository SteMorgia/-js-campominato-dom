const playDom = document.getElementById('button');

playDom.addEventListener("click", playGame);








    




function playGame () {
    
    let livello = document.getElementById('livelli');
    let difficolta = livello.value;
    let numeriUsati = [];
    for (let x = 1; x <= 16; x++) {
        const bomba = generaBombe(numeriUsati,1,100);
        numeriUsati.push(bomba);
    }
    
    

    if (difficolta === "facile"){
        creaQuadrati(100);
        gridDom.classList.add('facile');
    } else if (difficolta === "medio") {
        creaQuadrati(81);
        gridDom.classList.add('medio');
    } else {
        creaQuadrati(49);
        gridDom.classList.add('difficile');
    }

    function coloraCella () {
        this.classList.toggle ("clicked");
    }
    
    function creaQuadrati(square_number) {
        const gridDom = document.getElementById('grid');
        gridDom.innerHTML = '';
        for (let i = 0; i < square_number; i++) {
            const divSquare = document.createElement('div');
            divSquare.classList.add('square');
            divSquare.append(i + 1);
            divSquare.addEventListener("click", coloraCella );
            gridDom.append(divSquare);
        }
    }
    function creaNumeroCasuale(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generaBombe (listaNumeriUsati, min, max) {
        let numeroValido = false;
        let numeroCasualeCreato;
        while ( numeroValido == false ) {
            numeroCasuale = creaNumeroCasuale(min, max);
            if (listaNumeriUsati.includes(numeroCasualeCreato) == false) {
                numeroValido = true;
            }
        }
        return numeroCasualeCreato;
    }

    
}





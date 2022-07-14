const playDom = document.getElementById('button');

playDom.addEventListener("click", playGame);








    




function playGame () {
    
    let livello = document.getElementById('livelli');
    let difficolta = livello.value;
    
    

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

    function generaBombe (min, max) {
        let myArray = [];
        for (let x = 0; x < 16; x++) {
            myArray.push(x);
        } 
        return (Math.round(Math.random(max - min) * 100));
    }
}





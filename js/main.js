const playDom = document.getElementById('button');

playDom.addEventListener("click", playGame);








    




function playGame () {
    const gridDom = document.getElementById('grid');
    let myArray = [];
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
    
    function generaBombe (min, max) {
        for (let x = 0; x < 16; x++) {
            return (Math.round(Math.random(max - min) * 100));
        } 
        console.log(generaBombe(1, 81));
    }
    
    
    
    function creaQuadrati(square_number) {
        for (let i = 0; i < square_number; i++) {
            const divSquare = document.createElement('div');
            divSquare.classList.add('square');
            console.log(i + 1);
            divSquare.append(i + 1);
            divSquare.addEventListener("click", coloraCella );
            gridDom.append(divSquare);
        }
    }
}





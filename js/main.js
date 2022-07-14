const gridDom = document.getElementById('grid');
let myArray = [];
let livello = document.getElementById('livelli');
let difficolta = livello.value;

for (let i = 0; i < 100; i++) {
    const divSquare = document.createElement('div');
    gridDom.append(divSquare);
    divSquare.classList.add('square');
    console.log(i + 1);
    divSquare.append(i + 1);
}

/*if (difficolta === "facile"){
    creaQuadrati(100);
    gridDom.classList.add('facile');
} else if (difficolta === "medio") {
    creaQuadrati(81);
    gridDom.classList.add('medio');
} else {
    creaQuadrati(49);
    gridDom.classList.add('difficile');
}*/
    






function generaNumeri (min, max) {
    return (Math.round(Math.random(max - min) * 100));
}



function creaQuadrati(square_number) {
    for (let i = 0; i < square_number; i++) {
        const divSquare = document.createElement('div');
        gridDom.append(divSquare);
        divSquare.classList.add('square');
        console.log(i + 1);
        divSquare.append(i + 1);
    }
}


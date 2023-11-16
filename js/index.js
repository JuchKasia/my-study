const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const color = document.querySelector('.color');
const textContent = document.querySelector('.text-content');

let fontSize = 20;  //wartość domyślna

function bigText() {
    // najpierw zwiększamy naszą wartość font-size, a potem ją przepisujemy

    // fontSize++; //za każdym klikiem przycisku '+' zwiększa się font-size tekstu o 1 px 
                // przy każdym kliknięciu
                // x = x + y;
                // x += y;
    // fontSize = fontSize + 5; //krok zwiększenia rozmiaru teksta piszemy 5px;
    // lub to samo piszemy  następnie w skrócie
     fontSize += 5; 

// textContent.style.fontSize = '50px'; // font-size zwiękrzamy
    textContent.style.fontSize = fontSize + 'px';
} 

function smallText() {
    fontSize -= 5; 
    textContent.style.fontSize = fontSize + 'px';
}


function changeColor() {
    textContent.style.color = 'gold';
}

sizeUp.addEventListener('click', bigText); // klikamy na przcisk - tekst się zwiększa
sizeDown.addEventListener('click', smallText); // klikamy na przcisk - tekst się zwiększa
color.addEventListener('click', changeColor);
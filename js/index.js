const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btnRemove = document.querySelector('.remove-color');
const square = document.querySelector('.color');

// console.log(btn1, btn2);

// // function clickBtn1() {
//     btn1.addEventListener('click', function clickBtn1() {
//         console.log('Kliknięto przycisk 1');
//     })
// // }


// btn2.addEventListener('click', function clickBtn2(x, y) {
//     console.log(2 + 2 );
// })
// // clickBtn2(2, 2);

function redColor () {
    square.classList.add('red');
    square.classList.remove('blue');

}

function blueColor () {
    square.classList.add('blue');
    square.classList.remove('red');

}

btn1.addEventListener('click', redColor);
btn2.addEventListener('click', blueColor);


btnRemove.addEventListener('click', function deleteColor () {
    square.classList.remove('blue');
    square.classList.remove('red');
})
deleteColor;
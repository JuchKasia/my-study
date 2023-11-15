const arrowSvg = document.querySelector('.fas');
const btn = document.querySelector('.arrow');
const item1 = document.querySelector('.item1');

function showImg() {
    item1.classList.toggle('show');
    if (item1.classList.contains('show')) {
        arrowSvg.style.transform = 'rotate(180deg)';
        // arrowSvg.style.rotate = '180deg';  2 sposób

        // item1.classList.toggle('show');
    } else {
        arrowSvg.style.transform = 'rotate(360deg)'
        // arrowSvg.style.rotate = '0deg';  2 sposób
    }
}


btn.addEventListener('click', showImg);



const inputs = document.querySelectorAll('input');
const prov = document.querySelector('.provid');

inputs[1].addEventListener('click', formValid);

function formValid(){
    let val = inputs[0].value;
    let regex = /\w+@{1}[a-zA-Z]+[.]{1}[a-zA-Z]+/gi;
    let res = regex.test(val);
    if (!res) {
        inputs[0].style.borderColor = 'hsl(354, 100%, 66%)';
        prov.children[1].classList.remove('active');
    }
}
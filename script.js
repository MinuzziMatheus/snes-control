let buttonTop = document.getElementsByClassName('button-wp');
let buttonDown = document.getElementsByClassName('button-sp');
let rightTop = document.getElementsByClassName('right');
let leftTop = document.getElementsByClassName('left');
let bodyControl = document.getElementsByClassName('control-body');
let arrows = document.getElementsByClassName('arrow');

for(let count = 0; count < buttonTop.length; count++) {
    buttonTop[count].addEventListener('click', () => {
        if(count == 0){
            removeBtnPressed();
            document.body.style.backgroundColor = '#519e58';
            buttonTop[count].classList.add('buttonpressed');
        }else {
            removeBtnPressed();
            document.body.style.backgroundColor = '#1369b3';
            buttonTop[count].classList.add('buttonpressed');
        }
    });
    buttonDown[count].addEventListener('click', () => {
        if(count == 0){
            removeBtnPressed();
            document.body.style.backgroundColor = '#f6d75a';
            buttonDown[count].classList.add('buttonpressed');
        }else {
            removeBtnPressed();
            document.body.style.backgroundColor = '#cd3a2c';
            buttonDown[count].classList.add('buttonpressed');
        }
    });
}

function removeBtnPressed(){
    for(let x = 0; x < buttonTop.length; x++){
        buttonTop[x].classList.remove('buttonpressed');
        buttonDown[x].classList.remove('buttonpressed');
    }
}

rightTop[0].addEventListener('click', () => {
    onMoveControl('r');
});

leftTop[0].addEventListener('click', () => {
    onMoveControl('l');
});

function onMoveControl(direction){
    if(bodyControl[0].classList.contains('control-bodyMoveToLeft')){
        bodyControl[0].classList.remove('control-bodyMoveToLeft');
    } else if(bodyControl[0].classList.contains('control-bodyMoveToRight')){
        bodyControl[0].classList.remove('control-bodyMoveToRight');
    }
    if(direction == 'r'){
        bodyControl[0].classList.add('control-bodyMoveToRight');
    } else {
        bodyControl[0].classList.add('control-bodyMoveToLeft');
    }
}
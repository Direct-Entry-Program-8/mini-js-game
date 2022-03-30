var character = document.getElementById('character');

var i = 1;
var j = 0;
const fps = 5;
var direction = 'right';
var runningState = false;

function animateSprite(){
    if (!runningState){
        character.src = 'image/character/Idle (' + i + ').png';
    }else{
        character.src = 'image/character/Walk (' + i + ').png';
    }
    if (j++ === fps){
        i++;
        j = 0;
    }
    if (i > 10) i=1;
    requestAnimationFrame(animateSprite);
}

animateSprite();

document.addEventListener('keydown', function(eventData){
    runningState = true;
    if (eventData.code === 'ArrowRight'){
        if (direction !== 'right') {
            direction = 'right';
            character.style.transform = 'rotateY(0deg)';
        }

        if ((character.offsetLeft + 5 + 100) > window.innerWidth) return;
        character.style.left = (character.offsetLeft + 5) + 'px';
    }else if (eventData.code === 'ArrowLeft'){
        if (direction !== 'left') {
            direction = 'left';
            character.style.transform = 'rotateY(-180deg)';
        }
        if ((character.offsetLeft ) < 0) return;
        character.style.left = (character.offsetLeft - 5) + 'px';
    }
});

document.addEventListener('keyup', function(eventData){
    if (eventData.code === 'ArrowRight' || eventData.code === 'ArrowLeft'){
        runningState = false;
        i = 0;
    }
});
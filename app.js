


/*
window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();   
    key.classList.add('playing');   
});
*/

//mobile 
window.addEventListener('click',function(e){
    let currentValue = e.target.getAttribute("value");

    if(currentValue === '65'){
        let key = document.querySelector('.style65');
        key.classList.add('playing');
        audio65.currentTime = 0;
        audio65.play();

    }



});

function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip it if is not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));




// Audios cavernicola

const audio65 = document.querySelector(`audio[data-key='65']`);
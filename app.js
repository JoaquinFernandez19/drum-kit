



window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();   
    key.classList.add('playing');   
});




function removeTransition(e){
    if (e.propertyName !== 'transform') return; //skip it if is not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));




//mobile cavernicola
window.addEventListener('touchstart',function(e){
    let currentValue = e.target.getAttribute("value");

    if(currentValue === '65'){
        let key = document.querySelector('.style65');
        key.classList.add('playing');
        audio65.currentTime = 0;
        audio65.play();
    }
    if(currentValue === '83'){
        let key = document.querySelector('.style83');
        key.classList.add('playing');
        audio83.currentTime = 0;
        audio83.play();
    }
    if(currentValue === '68'){
        let key = document.querySelector('.style68');
        key.classList.add('playing');
        audio68.currentTime = 0;
        audio68.play();
    }

    if(currentValue === '70'){
        let key = document.querySelector('.style70');
        key.classList.add('playing');
        audio70.currentTime = 0;
        audio70.play();
    }

    if(currentValue === '71'){
        let key = document.querySelector('.style71');
        key.classList.add('playing');
        audio71.currentTime = 0;
        audio71.play();
    }

    if(currentValue === '72'){
        let key = document.querySelector('.style72');
        key.classList.add('playing');
        audio72.currentTime = 0;
        audio72.play();
    }
    if(currentValue === '74'){
        let key = document.querySelector('.style74');
        key.classList.add('playing');
        audio74.currentTime = 0;
        audio74.play();
    }
    if(currentValue === '75'){
        let key = document.querySelector('.style75');
        key.classList.add('playing');
        audio75.currentTime = 0;
        audio75.play();
    }
    if(currentValue === '76'){
        let key = document.querySelector('.style76');
        key.classList.add('playing');
        audio76.currentTime = 0;
        audio76.play();
    }





});
// Audios cavernicola
const audio65 = document.querySelector(`audio[data-key='65']`);
const audio83 = document.querySelector(`audio[data-key='83']`);
const audio68 = document.querySelector(`audio[data-key='68']`);
const audio70 = document.querySelector(`audio[data-key='70']`);
const audio71 = document.querySelector(`audio[data-key='71']`);
const audio72 = document.querySelector(`audio[data-key='72']`);
const audio74 = document.querySelector(`audio[data-key='74']`);
const audio75 = document.querySelector(`audio[data-key='75']`);
const audio76 = document.querySelector(`audio[data-key='76']`);


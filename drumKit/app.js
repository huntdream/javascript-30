window.addEventListener('keydown',function(e){
    const keyCode = e.keyCode;
    const selectedKey = document.querySelector('.key-'+keyCode);
    const selectedAudio = document.querySelector('audio[data-key="'+keyCode+'"]')
    selectedAudio.play();
    console.log(selectedAudio);
    selectedKey.classList.toggle('pressed');
})

window.addEventListener('keyup',function(e){
    const keyCode = e.keyCode;
    const selectedKey = document.querySelector('.key-'+keyCode);
    selectedKey.classList.toggle('pressed');
})
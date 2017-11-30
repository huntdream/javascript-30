window.addEventListener('keydown', function (e) {
    getAudioPlay(e);
});


function getAudioPlay(e) {
    const keyCode = e.keyCode;
    const selectedKey = document.querySelector('.key-' + keyCode);
    console.log(e.code, e.which);
    if(selectedKey) {
        const selectedAudio = document.querySelector('audio[data-key="' + keyCode + '"]');
        selectedAudio.play();
        console.log(selectedAudio);
        selectedKey.classList.add('pressed');
        console.log(e.keyCode);
    }
}
window.addEventListener('keyup', function (e) {
    const keyCode = e.keyCode;
    const selectedKey = document.querySelector('.key-' + keyCode);
    if(selectedKey) {
        selectedKey.classList.remove('pressed');
    }
});
//  Eventlistner:[copy,cut,blur,focus,input] to textarea
const info = document.querySelector('.info');
const typing = document.querySelector('.typing');
const textarea = document.querySelector('textarea');

textarea.addEventListener('cut', function (e) {
    info.textContent = `I cannot get data from clipboard,but I can get it from selection. You cut this:  ${window.getSelection().toString()}`;
    console.log(e);
});

textarea.addEventListener('copy', function (e) {
    info.textContent = `I cannot get data from clipboard,but I can get it from selection. \n You copied this: ${window.getSelection().toString()}`;
    console.log(e);
});

textarea.addEventListener('focus', function () {
    info.textContent = 'Welcome.You triggered focus event';
});

textarea.addEventListener('blur', function () {
    info.textContent = 'Farewell.You triggered blur event';
});

textarea.addEventListener('input', function (e) {
    typing.textContent = `You are typing : ${e.target.value}`;
});


//EventListener:[hashchange]
window.addEventListener('hashchange', function () {
    let hash = document.location.hash;
    document.querySelector('.hashchange').textContent='The current hash is:'+hash;
});
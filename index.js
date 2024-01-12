function startGame() {
    var overlay = document.getElementById('overlay');
    var button = document.querySelector('button');

    overlay.style.transition = 'opacity 1s ease-in-out';
    button.style.transition = 'opacity 1s ease-in-out';

    overlay.style.opacity = '0';
    button.style.opacity = '0';

    setTimeout(function() {
        window.location.assign('1.html');
    }, 1500);
}

setTimeout(function() {
    document.getElementById('overlay').style.top = '0';
    document.body.style.filter = 'blur(0)';
}, 0);

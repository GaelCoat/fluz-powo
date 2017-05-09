var color1, color2;

document.getElementById('bouton-exp').onclick = function(){
    var colors = [
        '#ff2e46',
        '#ff1945',
        '#6ec4ff',
        '#ff9d33',
        '#a067ff'
    ];

    color1 = colors[Math.floor(Math.random() * colors.length)];
    color2 = colors[Math.floor(Math.random() * colors.length)];

    var divCircle = document.createElement('div');
    divCircle.className = 'circle-experience';

    if(document.getElementById('bloc-experience').childNodes.length >= 2){
        document.getElementById('bloc-experience').removeChild(document.getElementById('bloc-experience').childNodes[0]);
    }
    prefixValue(divCircle, color1, color2);
    document.getElementById('bloc-experience').appendChild(divCircle);
    setTimeout(function(){
        divCircle.style.transform = 'translate(50%, 50%) scale(1)';
    }, 20);
};

function prefixValue(element, color1, color2) {
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    prefixes.forEach(function (prefixe){
        element.style.background = prefixe + 'linear-gradient(230deg, ' + color1 + ', ' + color2 + ')';
    });
}
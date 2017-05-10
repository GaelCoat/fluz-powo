// var color1, color2;
//
// document.getElementById('bouton-exp').onclick = function(){
//     var colors = [
//         '#ff2e46',
//         '#ff153c',
//         '#ff744e',
//         '#7649ff',
//         '#001eff',
//         '#ff6ee4',
//         '#ff3410',
//         '#ff3a38',
//         '#ff09a3',
//         'linear-gradient(230deg, rgb(255, 110, 228), rgb(255, 21, 60))',
//         '#a613ff'
//     ];
//
//     color1 = colors[Math.floor(Math.random() * colors.length)];
//     color2 = colors[Math.floor(Math.random() * colors.length)];
//
//     var divCircle = document.createElement('div');
//     divCircle.className = 'circle-experience';
//
//     if(document.getElementById('bloc-experience').childNodes.length >= 2){
//         document.getElementById('bloc-experience').removeChild(document.getElementById('bloc-experience').childNodes[0]);
//     }
//     prefixValue(divCircle, color1, color2);
//     document.getElementById('bloc-experience').appendChild(divCircle);
//     setTimeout(function(){
//         divCircle.style.transform = 'translate(50%, 50%) scale(1)';
//     }, 20);
// };
//
// function prefixValue(element, color1, color2) {
//     var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];
//
//     prefixes.forEach(function (prefixe){
//         element.style.background = prefixe + 'linear-gradient(230deg, ' + color1 + ', ' + color2 + ')';
//     });
// }

var gradient;

document.getElementById('bouton-exp').onclick = function(){
    var gradientBackground = [
        'linear-gradient(230deg, rgb(255, 110, 228), rgb(255, 21, 60))',
        'linear-gradient(230deg, rgb(112, 110, 255), rgb(187, 21, 255))',
        'linear-gradient(230deg, rgb(255, 230, 110), rgb(255, 21, 60))'
    ];

    var gradientForm = [
        'linear-gradient(230deg, rgb(255, 110, 228), rgb(255, 21, 60))',
        'rgb(255, 110, 228)',
        'rgb(255, 21, 60)',

        'linear-gradient(230deg, rgb(112, 110, 255), rgb(187, 21, 255))',
        'rgb(112, 110, 255)',
        'rgb(187, 21, 255)',

        'linear-gradient(230deg, rgb(255, 230, 110), rgb(255, 21, 60))',
        'rgb(255, 230, 110)',
        'rgb(255, 21, 60)'
    ];

    gradient = gradientBackground[Math.floor(Math.random() * gradientBackground.length)];

    if(gradient == gradientBackground[0]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[7]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[8]);
        }, 200);
    }
    else if(gradient == gradientBackground[1]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[1]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[2]);
        }, 200);
    }
    else if(gradient == gradientBackground[2]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[4]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[5]);
        }, 200);
    }

    var divCircle = document.createElement('div');
    divCircle.className = 'circle-experience';

    if(document.getElementById('bloc-experience').childNodes.length >= 2){
        document.getElementById('bloc-experience').removeChild(document.getElementById('bloc-experience').childNodes[0]);
    }

    prefixValue(divCircle, gradient);
    document.getElementById('bloc-experience').appendChild(divCircle);
    setTimeout(function(){
        divCircle.style.transform = 'translate(50%, 50%) scale(1)';
    }, 20);
};

function prefixValue(element, gradient) {
    var prefixes = ['-o-', '-ms-', '-moz-', '-webkit-'];

    prefixes.forEach(function (prefixe){
        element.style.background = prefixe + gradient;
    });
}
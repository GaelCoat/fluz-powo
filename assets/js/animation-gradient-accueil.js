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
        'linear-gradient(230deg, rgb(255, 230, 110), rgb(255, 21, 60))',
        'linear-gradient(230deg, rgb(110, 255, 228), rgb(57, 21, 255))',
        'linear-gradient(230deg, rgb(20, 60, 173), rgb(218, 49, 76))'
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
        'rgb(255, 21, 60)',

        'linear-gradient(230deg, rgb(110, 255, 228), rgb(57, 21, 255))',
        'rgb(110, 255, 228)',
        'rgb(57, 21, 255)',

        'linear-gradient(230deg, rgb(20, 60, 173), rgb(218, 49, 166))',
        'rgb(20, 60, 173)',
        'rgb(218, 49, 166)'
    ];

    gradient = gradientBackground[Math.floor(Math.random() * gradientBackground.length)];

    if(gradient == gradientBackground[0]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[2]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[1]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[1]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[2]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[2]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[1]);
            
            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[2]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[1]);
        }, 350);
    }


    else if(gradient == gradientBackground[1]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[5]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[4]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[4]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[5]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[5]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[4]);

            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[5]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[4]);
        }, 350);
    }


    else if(gradient == gradientBackground[2]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[8]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[7]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[7]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[8]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[8]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[7]);

            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[8]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[7]);
        }, 350);
    }


    else if(gradient == gradientBackground[3]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[11]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[10]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[10]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[11]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[11]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[10]);

            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[11]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[10]);
        }, 350);
    }


    else if(gradient == gradientBackground[4]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[14]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[13]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[13]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[14]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[14]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[13]);

            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[14]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[13]);
        }, 350);
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
var gradient;
var currentGradient;

document.getElementById('bouton-exp').onclick = function(){
    var gradientBackground = [
        'linear-gradient(230deg, #ff3a66, #ff6d92)',
        'linear-gradient(230deg, #3ae1f3, #09def0)',
        'linear-gradient(230deg, #323ec4, #687df1)',
        'linear-gradient(230deg, #fcc421, #fcdd4e)',
        'linear-gradient(230deg, #00f4c3, #3ff6d4)',
        'linear-gradient(230deg, #7261ef, #a396fb)'
    ];

    var gradientForm = [
        'linear-gradient(230deg, #b505f4, #ed25fe)',
        '#b505f4',
        '#ed25fe',

        'linear-gradient(230deg, #ff3a68, #ff6c92)',
        '#ff3a68',
        '#ff6c92',

        'linear-gradient(230deg, #fcc622, #fcdb48)',
        '#fcc622',
        '#fcdb48',

        'linear-gradient(230deg, #0bdef0, #34e0f3)',
        '#0bdef0',
        '#34e0f3',

        'linear-gradient(230deg, #ff3968, #ff6a8f)',
        '#ff3968',
        '#ff6a8f',

        'linear-gradient(230deg, #01f4c4, #3cf6d4)',
        '#01f4c4',
        '#3cf6d4'
    ];


    currentGradient = gradientBackground[1];

    gradient = gradientBackground[Math.floor(Math.random() * gradientBackground.length)];


    while(gradient == currentGradient){
        gradient = gradientBackground[Math.floor(Math.random() * gradientBackground.length)];
    }

    currentGradient = gradient;


    if(gradient == gradientBackground[0]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[1]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[2]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[1]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[2]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[1]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[2]);

            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[1]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[2]);
        }, 350);
    }


    else if(gradient == gradientBackground[1]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[4]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[5]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[4]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[5]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[4]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[5]);

            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[4]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[5]);
        }, 350);
    }


    else if(gradient == gradientBackground[2]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[7]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[8]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[7]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[8]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[7]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[8]);

            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[7]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[8]);
        }, 350);
    }


    else if(gradient == gradientBackground[3]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[10]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[11]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[10]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[11]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[10]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[11]);

            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[10]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[11]);
        }, 350);
    }


    else if(gradient == gradientBackground[4]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[13]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[14]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[13]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[14]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[13]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[14]);

            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[13]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[14]);
        }, 350);
    }


    else if(gradient == gradientBackground[5]){
        setTimeout(function() {
            document.getElementById('stop1GradientForm').setAttribute('stop-color', gradientForm[16]);
            document.getElementById('stop2GradientForm').setAttribute('stop-color', gradientForm[17]);
        }, 200);

        setTimeout(function(){
            document.getElementById('stop1GradientButton').setAttribute('stop-color', gradientForm[16]);
            document.getElementById('stop2GradientButton').setAttribute('stop-color', gradientForm[17]);
        }, 270);

        setTimeout(function(){
            document.getElementById('stop1GradientLogo').setAttribute('stop-color', gradientForm[16]);
            document.getElementById('stop2GradientLogo').setAttribute('stop-color', gradientForm[17]);

            document.getElementById('stop1GradientLogoMobile').setAttribute('stop-color', gradientForm[16]);
            document.getElementById('stop2GradientLogoMobile').setAttribute('stop-color', gradientForm[17]);
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
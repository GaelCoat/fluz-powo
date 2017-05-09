document.getElementById('bouton-exp').onclick = function(){
    var color = '#';
    var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0'];
    color += letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('accueil').style.background = color;
};